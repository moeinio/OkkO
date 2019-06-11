import React from 'react';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "",
        }
    }

    textChange = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.textChange(e)} />
                {this.state.text}
            </div>
        )
    };
}
