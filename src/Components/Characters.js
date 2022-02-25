import { getCharacters } from "../Api/getCharacters";

export const Characters = () => {
  getCharacters();
  return <h2>Characters</h2>;
};
