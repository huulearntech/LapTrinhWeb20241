import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 MyApp. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
