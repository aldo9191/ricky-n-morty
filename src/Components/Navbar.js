import styled from 'styled-components';
// import { Link, Router } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #00B0C8;
  display: flex;
  justify-content: space-around;
  color: #FFF;
  align-items: center;
  `;

export const ListMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 40px;
  `

export const Navbar = () => {
  return (
    <>
     
        <NavContainer>
          <p>LOGO</p>
          <div>
            <ListMenu>
              <li>Characters</li>
              <li>Locations</li>
              <li>Episodes</li>
            </ListMenu>
          </div>
        </NavContainer>
    
    </>
  )
}

// export default Navbar;
