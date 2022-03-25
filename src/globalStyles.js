import { createGlobalStyle } from 'styled-components';
import img from './img/background.png'
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${img});
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .none {
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
  }

`;
 
export default GlobalStyle;