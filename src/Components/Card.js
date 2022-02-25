import styled from "styled-components";
import React from "react";
import avatar from "../../src/freddy.jpeg";

export const StyledCard = styled.div`
  width: 250px;
  height: 380px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Card = () => {
  return (
    <StyledCard>
      <img src={avatar} alt="avatar" />
      <h2>Rick Sanchez</h2>
      <p>Human</p>
    </StyledCard>
  );
};
