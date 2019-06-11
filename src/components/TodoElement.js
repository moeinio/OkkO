import React from 'react';
import styled from 'styled-components';



export default class TodoElement extends React.Component{
    render() {
        return (
            <TodoElementContainer>
                <TodoElementId>
                    # {this.props.todo.id}
                </TodoElementId>
                <TodoElementTasl>
                    {this.props.todo.task}
                </TodoElementTasl>
            </TodoElementContainer>
        )
    }
}

const TodoElementContainer = styled.div`
background: #13e4e9;
border: solid 1px black;
margin: 2%;
height: 8em;
flex-grow: 1;
font-size: 1em;
`

const TodoElementId = styled.div `

`
const TodoElementTasl = styled.div `

`