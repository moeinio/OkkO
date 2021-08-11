import React, {useState} from 'react';


const TextInput = () => {
    const [text, setText] = useState('');

    textChange = (e) => {
        setText(e.target.value )
    };

    render() {
        return (
            <div>
                <input onChange={(e) => this.textChange(e)} />
                {text}
            </div>
        )
    };
}


export default TextInput;
