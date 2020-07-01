import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;

  }

  img {
    width: 100%;
  }
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    width: 80%;
  }

  .visuallyHidden:not(:focus):not(:active) { position: absolute; width: 1px; height: 1px; margin: -1px;border: 0;padding: 0;white-space: nowrap;clip-path: inset(100%);clip: rect(00 0 0);overflow: hidden;}
`;
