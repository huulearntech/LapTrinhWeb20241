import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #4285f4;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    background-color: #357ae8;
  }
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <img src="#" alt="Scroll to Top" style={{ width: '30px', height: '30px' }} />
    </Button>
  );
};

export default ScrollToTopButton;
