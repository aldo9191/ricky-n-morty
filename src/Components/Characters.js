import { getCharacters } from "../Api/getCharacters";
import { SearchBox, FilterBox } from "./Inputs";

export const Characters = () => {
  getCharacters();
  return (
    <>
      <SearchBox />
      <FilterBox />
      <h2>Characters</h2>
    </>
  );
};
