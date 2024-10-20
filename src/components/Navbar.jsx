import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProfileMenu from './ProfileMenu'

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-sizing: border-box; /* Ensures padding is counted inside height */
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: bold;

  img {
    height: 50px;
    margin-right: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Adjust spacing between menu items */

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">
        <img src="/logo.png" alt="Logo" />
      </Logo>
      <Menu>
        <Link to="/explore">Explore</Link>
        <Link to="/subscriptions">Subscriptions</Link>
        <Link to="/profile">Profile</Link>
        <ProfileMenu />
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
