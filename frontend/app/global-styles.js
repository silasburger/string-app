import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    height: 100%;
    width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  #app>div {
    display: flex;
    flex-direction: column;
    background-color: blanchedalmond;
    height: 100%;
  }

  #homepage {
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
  }

  #string-page {
    height: 100%;
    display: flex;
  }

`;

export default GlobalStyle;
