import React from 'react';
import styled from 'styled-components';

// Styled component for the Grid Container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 20px;
`;

// Styled component for the Grid Item
const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const GridView = () => {
  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem key={index}>
          {item}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default GridView;
