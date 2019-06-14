import React from 'react';
import styled from 'styled-components';
import {DeleteButton} from "./styled/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-responsive-modal';

export default class TodoElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            modalIsOpen: false
        };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <TodoElementOuterContainer>
                <TodoElementContent onClick={() => this.openModal()} expanded={false} todo={this.props.todo} onRemove={this.props.onRemove}/>
                <Modal
                    focusTrapped={false}
                    open={this.state.modalIsOpen}
                    onClose={() => this.closeModal()}
                    onOverlayClick={() => this.closeModal()}
                    showCloseIcon={false}
                    center
                    styles={{modal: {padding: 0}}}
                >
                    <TodoElementContent expanded={true} todo={this.props.todo} onRemove={this.props.onRemove} updateTodo={this.props.updateTodo}/>
                </Modal>
            </TodoElementOuterContainer>
        )
    }
}

export class TodoElementContent extends React.Component {
    state = {
        inEdit: false
    };

    updateTodo = (task) =>{
        let updatedTodo =  {...this.props.todo, task: task};
        this.props.updateTodo(this.props.todo.id, updatedTodo)
    };

    render() {
        return (
            <TodoElementContainer expanded={this.props.expanded} onClick={() => this.props.onClick && this.props.onClick()}>
                <TodoElementHeader>
                    <DeleteButton onClick={() => this.props.onRemove(this.props.todo.id)}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </DeleteButton>
                    <TodoElementId>
                        # {this.props.todo.id} {this.props.todo.title}
                    </TodoElementId>
                </TodoElementHeader>
                {!this.state.inEdit &&
                <TodoElementTask expanded={this.props.expanded} onClick={() => this.props.expanded && this.setState({inEdit: true})} >
                    {this.props.expanded ? this.props.todo.task :
                        this.props.todo.task.length > 100 ?
                            this.props.todo.task.substr(0, 100).concat(' ...') :
                            this.props.todo.task}
                </TodoElementTask>
                }
                {this.state.inEdit &&
                    <TodoEditableText onChange={e => this.updateTodo(e.target.value)} defaultValue={this.props.todo.task} />
                }
                <TodoElementFooter>
                    Created: {this.props.todo.creationDate} - Updated: {this.props.todo.updateDate}
                </TodoElementFooter>
            </TodoElementContainer>
        )
    }
}

const TodoElementOuterContainer = styled.div`
    margin-top: 1em;
    flex-basis: 30%;
    min-height: 10em;
`;


const TodoElementContainer = styled.div`
    background: #1E88E5;
    font-size: 1em;
    ${props => props.expanded ? `
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 80vh;
        width: calc(70vw);
        ` : `
        flex-basis: 30%;
        max-height: 10em;
    `};
    
`;

const TodoElementId = styled.div`

`;

const TodoElementTask = styled.div`
    padding: 0.5em;
    min-height: 1em;
    ${props => props.expanded ? `
        min-height: 50px;
        order: 2;
        overflow-x: auto;
        height: 80vh;
        ` : ` 
    `};
`;

const TodoElementHeader = styled.div`
    background: #2196F3;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0.5em;
    order: 1;
`;
const TodoElementFooter = styled.div`
    background: #2196F3;
    padding: 0.5em;
    font-size: 0.6em;
    font-weight: lighter;
    order: 3;
`;

const TodoEditableText = styled.textarea`
    box-sizing: border-box;
    border: none;
    resize: none;
    line-height: 24px;
    overflow: auto;
    padding: 8px;
    order: 2;
    height: 100%;
    flex-basis: 100%;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    background-color: #1E88E5;

    &::placeholder {
    color: gainsboro;
    }
    &:focus {
    outline: none;
    }
`;