import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Poppins;
        margin: 0;
        padding: 0;
    }
    body {
        background: ${({ theme }) => theme.background};
    }

    ul {
        margin-top: 0px !important;
      }
`;
