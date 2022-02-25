import styled from "styled-components";

export const StyledSearchBox = styled.input`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
`;

export const StyledFilterBox = styled.select`
  border: 1px solid #888;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
`;
export const SearchBox = () => {
  return <StyledSearchBox type="text" placeholder="enter a name..." />;
};

export const FilterBox = (props) => {
  return (
    <StyledFilterBox>
      {props.data.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </StyledFilterBox>
  );
};
