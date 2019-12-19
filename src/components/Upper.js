import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  letter-spacing: 1.2px;
  font-size: 4.2rem;
`;

const Input = styled.input`

`;

const Upper = () => (
    <Wrapper>
        <Heading>to-do app</Heading>
        <Input placeholder="add to-do task" />
    </Wrapper>
);

export default Upper;