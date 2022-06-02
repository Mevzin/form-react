import { createGlobalStyle } from 'styled-components';

const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background: #837F7E;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GLobalStyle;