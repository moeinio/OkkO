import React from 'react';
import styled from 'styled-components';
import {CloseButton} from "./styled/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default class TodoElement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expanded: false
        }
    }

    render() {
        return (
            <TodoElementContainer onClick={() => this.setState({expanded: true})}>
                <TodoElementHeader>
                    <CloseButton onClick={() => this.props.onRemove(this.props.todo.id)}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </CloseButton>
                    <TodoElementId>
                        # {this.props.todo.id}
                    </TodoElementId>
                </TodoElementHeader>
                <TodoElementTask expanded={this.state.expanded}>
                    {this.props.todo.task}
                </TodoElementTask>
            </TodoElementContainer>
        )
    }
}

const TodoElementContainer = styled.div`
background: #03A9F4;
font-size: 1em;
flex-basis: 30%;
margin-top: 1em;
max-height: 10em;
`;

const TodoElementId = styled.div`

`;

const TodoElementTask = styled.div`
    padding: 0.5em;
     
    ${props => props.expanded && ({
       
    })}
`;

const TodoElementHeader = styled.div`
    background: #F44336;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0.5em;
`;