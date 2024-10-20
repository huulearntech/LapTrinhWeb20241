import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 150px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: #666666;
  &:hover {
    background-color: #333333;
  }
`;

const ProfileMenu = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleProfileClick = () => navigate('/profile');

  return (
    <MenuContainer>
      <Avatar
        src="#"
        alt="User Avatar"
        onClick={toggleDropdown}
      />
      <Dropdown isOpen={isOpen}>
        <DropdownItem onClick={handleProfileClick}>Profile</DropdownItem>
        <DropdownItem onClick={() => navigate('/signin')}>Log Out</DropdownItem>
      </Dropdown>
    </MenuContainer>
  );
};

export default ProfileMenu;
