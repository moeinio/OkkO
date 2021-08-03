import React from "react";
import styled from "styled-components";
import TodoElement from "./TodoElement";

const TodoList = (props) => {
  return (
    <TodoContainer>
      {props.todos.length > 0 && (
        <>
          {props.todos.map((todo) => (
            <TodoElement
              onRemove={props.removeTodo}
              updateTodo={props.updateTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
        </>
      )}
    </TodoContainer>
  );
};

export default TodoList;
const TodoContainer = styled.div`
  font-size: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
