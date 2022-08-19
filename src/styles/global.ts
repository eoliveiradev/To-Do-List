import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
    text-decoration: none;
    list-style-type: none;

    font-family: ${props => props.theme["fonts"]["Inter"]};
    font-weight: 400;

    background: none;
    border: none;
  }

  button, input{
    cursor: pointer;
  }

  &:focus-visible{
    outline: 1px solid black;
    outline-offset: 4px;
    outline-color: white;
  }

  body{
    background-color: ${props => props.theme["colors"]["base-colors"]["gray-600"]};
  }
`