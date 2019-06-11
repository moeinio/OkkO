import React from 'react';
import styled from "styled-components";
import TodoElement from "./TodoElement";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TodoContainer>
                {this.props.todos.length > 0 &&
                    <>
                    {this.props.todos.map(todo => <TodoElement key={todo.id} todo={todo} />)}
                    </>
                }
            </TodoContainer>
        )
    };
}
const TodoContainer = styled.div`
font-size: 1em;
display: flex;
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap;
`