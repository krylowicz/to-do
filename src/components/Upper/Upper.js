import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Heading = styled.h1`
  font-weight: 500;
  letter-spacing: 1.2px;
  font-size: 4.2rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  border: none;
  margin-bottom: 2px;
  text-align: center;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    text-align: center;
  }
`;

const ItemBar = styled.div`
  width: 100%;
  height: 2px;
  background: #7d7d7d;
  border-radius: 25px;
`;

const Button = styled.button`
  margin-left: 25px;
  border: none;
  padding: 7px 15px;
  background-color: #1976D2;
  color: white;
  border-radius: 25px;
  font-size: 1.2rem;
`;

const Upper = () => (
    <Wrapper>
        <Heading>to-do app</Heading>
        <Row>
            <div>
                <Input placeholder="add task" />
                <ItemBar />
            </div>
            <Button>add</Button>
        </Row>
    </Wrapper>
);

export default Upper;