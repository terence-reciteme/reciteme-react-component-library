/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from "@mui/material/styles";
// import { DefaultTheme } from "styled-components";
import { ITheme } from "./theme";

/** Typing for styled-components default theme */

declare module "@mui/material/styles" {
  interface Theme extends ITheme {}

  // allow configuration using `createTheme`
  interface ThemeOptions extends ITheme {}
}

/** Typing for styled-components default theme */

// declare module "styled-components/macro" {
//   export interface DefaultTheme extends ITheme, Theme {}
// }
