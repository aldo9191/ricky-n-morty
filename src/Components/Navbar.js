import styled from "styled-components";
import { Link, Router } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #00b0c8;
  display: flex;
  justify-content: space-around;
  color: #fff;
  align-items: center;
`;

export const ListMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const Navbar = () => {
  return (
    <>
      <NavContainer>
        <img src="{}" />
        <div>
          <ListMenu>
            <Link to="/characters">Characters</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/episodes">Episodes</Link>
          </ListMenu>
        </div>
      </NavContainer>
    </>
  );
};

// export default Navbar;
