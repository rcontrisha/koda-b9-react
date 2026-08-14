import { useState, useEffect } from "react";
import fetchPokeData from "../utils/fetchApi";
import PokeCard from "../components/PokeCard";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

function PokePage() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=30"
        const data = await fetchPokeData(url);

        // Fetch detail
        const fetchDetail = data.results.map(async (detail) => {
          const detailUrl = detail.url;
          const responseDetail = await fetch(detailUrl);

          const detailPokemon = await responseDetail.json();
          const { id, name, sprites, types } = detailPokemon;
          // console.log(sprites);
          const sprite = sprites["front_default"];
          const type = types.map(({ type: { name } }) => name);

          return {
            id: id,
            name: name,
            sprite: sprite,
            types: type,
          };
        });

        const allResults = await Promise.all(fetchDetail);
        console.log(allResults);

        setData(allResults);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // const filteredData = filter
  //   ? data.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
  //   : data;

  return (
    <>
      <Header title={"Pokemon Data"} />
      <SearchBar value={filter} onChange={(e) => setFilter(e.target.value)} />
      <div className="px-8 py-4 grid grid-cols-4 gap-4">
        {data
          .filter((p) => p.name.includes(filter.toLowerCase()))
          .map((pokemon) => {
            return <PokeCard key={pokemon.id} data={pokemon} />;
          })}

        {/* {filter ? data.filter((p) => p.name.includes(filter.toLowerCase())).map((pokemon) => {
          return <PokeCard key={pokemon.id} data={pokemon} />;
        }) : data.map((pokemon) => {
          return <PokeCard key={pokemon.id} data={pokemon} />;
        })} */}

        {/* {filteredData.map((pokemon) => {
          return <PokeCard key={pokemon.id} data={pokemon} />;
        })} */}
      </div>
    </>
  );
}

export default PokePage;
