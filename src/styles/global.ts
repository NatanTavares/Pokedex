import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    background-color: ${props => props.theme.colors.background};
  }

  /* marin right 8.3% */

  ::-webkit-scrollbar {
    width: 12px;
    height: 504px;
  }

  ::-webkit-scrollbar-track {
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.secondary};
  }

  ::-webkit-scrollbar-thumb {
    width: 12px;
    height: 35%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
  }
`;