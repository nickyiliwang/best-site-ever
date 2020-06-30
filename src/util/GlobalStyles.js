import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  img {
    width: 100%;
  }
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    width: 80%;
  }
`;
