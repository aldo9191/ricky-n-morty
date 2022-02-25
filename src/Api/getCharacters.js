export const getCharacters = async () => {
  let base_url = "https://rickandmortyapi.com/api";
  let endpoint = "/character";

  try {
    let response = await fetch(base_url + endpoint);
    let data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};
