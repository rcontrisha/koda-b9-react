/**
 * Function to fetch pokemon data from PokeAPI
 * @returns 
 */
const fetchPokeData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export default fetchPokeData;
