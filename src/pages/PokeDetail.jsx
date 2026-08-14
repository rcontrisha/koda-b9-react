import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchPokeData from "../utils/fetchApi";
import Header from "../components/Header";

function PokeDetail() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    (async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetchPokeData(url);
        console.log(response);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <>
      <Header title={"Pokemon Details"} />
      {console.log("Data: ", data)}
      {data && (
        <div className="flex px-8 py-4 gap-4">
          <div className="border rounded-lg">
            <img src={data.sprites["front_default"]} className="w-full"></img>
            <div className="flex border-t">
              <img src={data.sprites["front_shiny"]} className="border-r"></img>
              <img
                src={data.sprites["back_default"]}
                className="border-r"
              ></img>
              <img src={data.sprites["back_shiny"]}></img>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl first-letter:uppercase">
              {data.name}
            </h1>
            <div className="flex gap-2 items-center">
              {data.types.map((type) => {
                return (
                  <div className="px-2 py-1 border-2 border-gray-600 w-fit rounded-full">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <div>
              <p className="text-lg font-medium mb-2">Abilities</p>
              <div className="flex gap-2 items-center">
                {data.abilities.map((ability) => {
                  return (
                    <div className="px-3 py-1 border border-gray-500 rounded-full">
                      {ability.ability.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {data.stats.map((stat) => {
                return (
                  <>
                    <div className="border rounded-lg">
                      <div className="px-3 text-center uppercase font-medium bg-gray-400 rounded-t-lg">
                        {stat.stat.name.replaceAll("-", " ")}
                      </div>
                      <hr />
                      <div className="text-center font-bold">
                        {stat.base_stat}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokeDetail;
