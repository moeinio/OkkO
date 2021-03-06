import styled from "styled-components";

const Button = styled.button`
    padding: 1em;
    color: white;
    background-color: #2962FF;
    border: 0;
    flex-basis: 15%;
    &:focus {
    border: none;
    }
`;

const DeleteButton = styled.button`
    background: transparent;
    color: white;
    border: 0;
    &:focus {
    border: none;
    }
`;

export  { DeleteButton }
export default Button