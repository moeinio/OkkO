import React from 'react';
import styled from "styled-components";

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            task: ''
        }
    }

    onAddTodo = (e) => {
        this.setState({id: this.state.id + 1});
        let todo = {id: this.state.id, task: this.state.task};

        // dein code

        this.props.addTodo(todo);
    };


    render() {
        return (
            <NewTask>
                <NewTaskInput type="text" onChange={e => this.setState({task: e.target.value})}/>
                <NewTaskSubmitButton onClick={e => this.onAddTodo(e)}>
                    Add a new task
                </NewTaskSubmitButton>
            </NewTask>

        )
    };

}

const NewTask = styled.div`
display: flex;
font-size: 1em;
`;

const NewTaskInput = styled.input`
padding: 1em;
flex-grow: 1;
margin-right: 1em;
background-color: #2196F3;
border: solid 1px white;
`;
const NewTaskSubmitButton = styled.button`
padding: 1em;
flex-grow: 0;
color: white;
background-color: #3F51B5;
border: 0;
`;

