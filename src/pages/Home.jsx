import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';



const Section = styled.section`
  height: 100vh; /* Each section will take up the full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  background-color: ${(props) => props.bgColor || '#4285f4'}; /* Default color */
`;


const AppContainer = styled.div`
  background-color: #f9f9f9;
`;

const Container = styled.div`
  padding: 20px;
`;

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Navbar >
      </Navbar>
      <Container>
        <h1>Welcome to Home Page</h1>
      </Container>
        <AppContainer>
          <Section bgColor="#4285f4">Section 1</Section>
          <Section bgColor="#db4437">Section 2</Section>
          <Section bgColor="#f4c20d">Section 3</Section>
          <ScrollToTopButton />
        </AppContainer>
    </div>
  );
};

export default Home;
