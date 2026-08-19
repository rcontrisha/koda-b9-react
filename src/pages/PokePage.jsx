import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
// import fetchPokeData from "../utils/fetchApi";
import PokeCard from "../components/PokeCard";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";

function PokePage() {
  const [data, setData] = useState([]);
  const {
    data: pokemon,
    isLoading,
    error,
  } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const { data: types } = useFetch("https://pokeapi.co/api/v2/type?limit=21");
  // const [data, setData] = useState([]);
  // const [types, setTypes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("name") || "";
  const type = searchParams.get("type") || "";

  useEffect(() => {
    (async () => {
      // Fetch detail
      const fetchDetail = pokemon?.results.map(async (detail) => {
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
      const allResults = fetchDetail ? await Promise.all(fetchDetail) : [];
      console.log(allResults);
      setData(allResults);
    })();
  }, [pokemon]);

  // useEffect(() => {
  // (async () => {
  //   try {
  //     const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  //     const data = await fetchPokeData(url);
  //     // Fetch detail
  //     const fetchDetail = data.results.map(async (detail) => {
  //       const detailUrl = detail.url;
  //       const responseDetail = await fetch(detailUrl);
  //       const detailPokemon = await responseDetail.json();
  //       const { id, name, sprites, types } = detailPokemon;
  //       // console.log(sprites);
  //       const sprite = sprites["front_default"];
  //       const type = types.map(({ type: { name } }) => name);
  //       return {
  //         id: id,
  //         name: name,
  //         sprite: sprite,
  //         types: type,
  //       };
  //     });
  //     const allResults = await Promise.all(fetchDetail);
  //     console.log(allResults);
  //     setData(allResults);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })();
  // (async () => {
  //   const url = "https://pokeapi.co/api/v2/type?limit=21";
  //   const response = await fetchPokeData(url);
  //   const { results } = response;
  //   setTypes(results);
  // })();
  // }, []);

  // const filteredData = filter
  //   ? data.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
  //   : data;

  return (
    <>
      <Header title={"Pokemon Data"} />
      <SearchBar
        value={query}
        onChange={(e) => {
          const value = e.target.value;

          if (value) {
            searchParams.set("name", value);
          } else {
            searchParams.delete("name");
          }

          setSearchParams(searchParams);
        }}
      />
      {isLoading ? (
        <div className="flex justify-center items-center text-5xl min-h-screen w-screen">
          Loading...
        </div>
      ) : error ? (
        <div className="flex justify-center items-center text-5xl text-red-500 font-bold min-h-screen w-screen">
          Error fetching data
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 py-2 px-8">
            {types &&
              types.results.map((typeItem, idx) => {
                const isActive = type === typeItem.name;
                return (
                  <div
                    key={idx}
                    className={`px-3 py-1 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-500 hover:text-white ${
                      isActive ? "bg-gray-800 text-white" : ""
                    }`}
                    onClick={() => {
                      // const next = new URLSearchParams(searchParams);
                      if (searchParams.get("type") === typeItem.name) {
                        searchParams.delete("type");
                      } else {
                        searchParams.set("type", typeItem.name);
                      }
                      setSearchParams(searchParams);
                    }}
                  >
                    {typeItem.name}
                  </div>
                );
              })}
          </div>
          <div className="px-8 py-4 grid grid-cols-4 gap-4">
            {data &&
              data
                .filter((p) => {
                  const matchName = p.name.includes(query);
                  const matchType = !type || p.types.includes(type);
                  return matchName && matchType;
                })
                .map((pokemon, idx) => {
                  return <PokeCard key={idx} data={pokemon} />;
                })}
          </div>
        </>
      )}
    </>
  );
}

export default PokePage;
