import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family:'Bahnschrift';
  src: url('/BAHNSCHRIFT1.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
    font-display: swap;
}
@font-face {
  font-family:'PressStart2P-Regular';
  src: url('/PressStart2P-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
    font-display: swap;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family:"Bahnschrift", sans-serif; 
  background-color: #021e38; 
  }
`;
