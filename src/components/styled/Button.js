import styled from "styled-components";

const Button = styled.button`
    padding: 1em;
    color: white;
    background-color: #3F51B5;
    border: 0;
    flex-basis: 15%;
    &:focus {
    border: none;
    }
`;

const CloseButton = styled.button`
    background: transparent;
    color: black;
    border: 0;
    &:focus {
    border: none;
    }

;
`;

export  { CloseButton }
export default Button