import React from 'react';
import styled from 'styled-components';



export default class TodoElement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <TodoElementContainer onClick={() => this.setState({isOpen: true})}>
                <TodoElementHeader>
                    <TodoElementRemove onClick={() => this.props.onRemove(this.props.todo.id)}>
                        X
                    </TodoElementRemove>
                    <TodoElementId>
                        # {this.props.todo.id}
                    </TodoElementId>
                </TodoElementHeader>
                <TodoElementTask isOpen={this.state.isOpen}>
                    {this.props.todo.task}
                </TodoElementTask>
            </TodoElementContainer>
        )
    }
}

const TodoElementContainer = styled.div`
background: #03A9F4;
border: solid 1px white;
margin: 2%;
flex-grow: 1;
font-size: 1em;
flex-basis: 25%;
`

const TodoElementId = styled.div `

`
const TodoElementTask = styled.div `
`
const TodoElementHeader = styled.div `

`
const TodoElementRemove = styled.button `

`
