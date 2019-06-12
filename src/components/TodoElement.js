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
            <TodoElementContainer expanded={this.state.expanded} onClick={() => this.setState({expanded: !this.state.expanded})}>
                <TodoElementHeader>
                    <CloseButton onClick={() => this.props.onRemove(this.props.todo.id)}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </CloseButton>
                    <TodoElementId>
                        # {this.props.todo.id} {this.props.todo.title}
                    </TodoElementId>
                </TodoElementHeader>
                <TodoElementTask>
                    {this.state.expanded ? this.props.todo.task : this.props.todo.task.substr(0,100).concat(' ...')}
                </TodoElementTask>
                <TodoElementFooter>
                    Created on: {this.props.todo.creationDate}
                </TodoElementFooter>
            </TodoElementContainer>
        )
    }
}

const TodoElementContainer = styled.div`
    background: #1E88E5;
    font-size: 1em;
    margin-top: 1em;
    ${props => props.expanded ? `
        flex-basis: 96.5%;
        max-height: max-content;
        ` : `
        flex-basis: 30%;
        max-height: 10em;
    `};
    
`;

const TodoElementId = styled.div`

`;

const TodoElementTask = styled.div`
    padding: 0.5em;
`;

const TodoElementHeader = styled.div`
    background: #2196F3;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0.5em;
`;
const TodoElementFooter = styled.div`
    background: #2196F3;
    padding: 0.5em;
    font-size: 0.6em;
    font-weight: lighter;
`;