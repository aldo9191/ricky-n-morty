import styled from "styled-components";
import { getCharacters } from "../Api/getCharacters";
import { SearchBox, FilterBox } from "./Inputs";
import { Card } from "./Card";
import { useState, useEffect } from "react";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 25px;
`;

export const Characters = () => {
  // getCharacters();
  let statusList = ["Alive", "Dead", "Zombie"];
  let genderList = ["Male", "Female", "Genderless"];

  let [data, setData] = useState(() => {
    let start = JSON.parse(localStorage.getItem("characters"));
    return start || [];
  });

  useEffect(() => {
    // const fetchData = async ()=>{
    //   const data = await fetch('https://rickandmortyapi.com/api/character')
    //   const json = await data.json()
    //   setData(json)
    // }

    // fetchData().catch(console.error)

    // (async() =>{
    //   let newData = await getCharacters()
    //   setData(newData)
    // })()

    getCharacters()
      .then((data) => {
        setData(data);
        localStorage.setItem("characters", JSON.stringify(data));
      })
      .catch(console.error);
  }, []);

  // console.log(typeof data.results)

  return (
    <>
      <SearchBox />
      <FilterBox data={statusList} />
      <FilterBox data={genderList} />
      <h2>Characters</h2>
      <StyledGrid>
        {data.length !== 0 ? (
          data.results.map((character) => (
            <Card key={character.id} {...character} />
          ))
        ) : (
          <p>No funciona</p>
        )}
      </StyledGrid>
    </>
  );
};
