import styled from "styled-components";
import { Link, Router } from "react-router-dom";
import logo from "./UI/rick_logo.png";
// import styles from "../App.css";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border: 0px solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

export const StyledLogo = styled.img`
  width: 90px;
  height: 100%px;
`;

export const Navbar = () => {
  return (
    <>
      <NavContainer>
        <StyledLogo src={logo} alt="logo" />
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
