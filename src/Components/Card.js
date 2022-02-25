import styled from "styled-components";
import React from "react";
import avatar from "../../src/freddy.jpeg";

export const StyledCard = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 150px;
  margin: 0 auto;
`;

export const TextSection = styled.div`
  padding: 20px;
`;

export const Card = () => {
  return (
    <StyledCard>
      <Avatar src={avatar} alt="avatar" />
      <TextSection>
        <h2>Rick Sanchez</h2>
        <p>Human</p>
      </TextSection>
    </StyledCard>
  );
};
