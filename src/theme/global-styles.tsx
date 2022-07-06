import { Theme } from "@mui/material";
import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle<{ defaultTheme: Theme }>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root, #root > div {
    /* height: 100% */
  }

  body {
    font-family: ${(props: any) => props.defaultTheme.fonts.sanSerif};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // below is setting the grid item background
  .react-grid-item.react-grid-placeholder {
    background-color: ${(props: any) => props.defaultTheme.colors.primaryColor};
  }
  .react-resizable-handle.react-resizable-handle-se {
    opacity: 0;
  }

  ul {
    padding: 0 0 0 20px;
  }
`;

export default GlobalStyles;
