import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        
    }

    onAddTodo = (e) => {
        let todo = {value: '1'};

        // dein code

        this.props.addTodo(todo);
    }

    render() {
        return (
            <div onClick={e => this.onAddTodo(e)}>
                test
            </div>
        )
    };
}
