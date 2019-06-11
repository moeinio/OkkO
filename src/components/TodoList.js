import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.todos)}
            </div>
        )
    };
}
