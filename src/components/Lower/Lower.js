import React from 'react';
import styled from 'styled-components';
import Task from '../Task/Task';
import TaskList from "../../TaskList/TaskList";

const Wrapper = styled.div`
  min-width: 100vw;
  height: 80vh;
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Lower = () => (
    <Wrapper>
        <TaskList>
            <Task />
        </TaskList>
    </Wrapper>
);

export default Lower;