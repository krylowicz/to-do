import React from "react";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskList = ({children}) => (
    <List>
        {children}
    </List>
);

export default TaskList;
