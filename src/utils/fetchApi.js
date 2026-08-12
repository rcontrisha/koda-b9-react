/**
 * Function to fetch pokemon data from PokeAPI
 * @returns 
 */
const fetchPokeData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export default fetchPokeData;
