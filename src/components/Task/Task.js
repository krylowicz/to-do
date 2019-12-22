import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  
`;

const RemoveButton = styled.button`
  margin-left: 20px;
  border: none;
  width: 15px;
  height: 15px;
`;

const Title = styled.p`
  font-size: 1.5rem;
`;

const Task = () => (
    <Wrapper>
        <Checkbox type="checkbox" />
        <Title>i am a task</Title>
        <RemoveButton />
    </Wrapper>
);

export default Task;