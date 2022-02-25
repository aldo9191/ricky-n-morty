import { getCharacters } from "../Api/getCharacters";
import { SearchBox, FilterBox } from "./Inputs";

export const Characters = () => {
  getCharacters();
  let statusList = ["Alive", "Dead", "Zombie"];
  let genderList = ["Male", "Female", "Genderless"];
  return (
    <>
      <SearchBox />
      <FilterBox data={statusList} />
      <FilterBox data={genderList} />
      <h2>Characters</h2>
    </>
  );
};
