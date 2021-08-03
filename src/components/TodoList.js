import React from 'react';
import styled from "styled-components";
import TodoElement from "./TodoElement";

export default class TodoList extends React.Component {
    render() {
        return (
            <TodoContainer>
                {this.props.todos.length > 0 &&
                    <>
                    {this.props.todos.map(todo => <TodoElement onRemove={this.props.removeTodo} updateTodo={this.props.updateTodo} key={todo.id} todo={todo} />)}
                    </>
                }
            </TodoContainer>
        )
    };
}
const TodoContainer = styled.div`
  font-size: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;