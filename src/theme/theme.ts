import { createTheme, Theme } from "@mui/material";

const colors = {
  backgroundColor: "#FFFFFF",
  primaryColor: "#06334A",
  textPrimary: "#2C2C2C",
  textLight: "#555555",
  accentColor: "#3286EB",
  textSecondary: "#2E559F",
  errorColor: "#E59222",
  grey: "#707070",
  lightGrey: "#EDEDED",
  reciteRed: "#D63231",
  hoverRed: "#AA2928",
  reciteYellow: "#F4B739",
  hoverYellow: "#D5A239",
} as const;

const fonts = {
  sanSerif: "'Lexend', sans-serif;",
  monospace: "monospace",
} as const;

export interface ITheme {
  colors: typeof colors;
  fonts: typeof fonts;
  bottomNavBarSize: number;
}

/** separate interface to force all future themes to take this shape.
 * Default theme available throughout the app with the theme provider
 */

export const defaultTheme: Theme = createTheme({
  colors,
  fonts,
  bottomNavBarSize: 80,
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 577,
      md: 768,
      lg: 1025,
      xl: 1600,
    },
  },
  typography: {
    fontFamily: fonts.sanSerif,
    body1: {
      fontSize: "1em",
      fontWeight: "normal",
      color: colors.textPrimary,
    },
    body2: {
      fontSize: 12,
      fontWeight: "normal",
      color: colors.textPrimary,
    },
    h1: {
      tag: "h1",
      fontSize: "3em",
      fontWeight: "500",
      color: colors.textPrimary,
      fontFamily: fonts.sanSerif,
      letterSpacing: 0,
    },
    h2: {
      tag: "h2",
      fontSize: "1.5em",
      fontWeight: "bold",
      marginBottom: "17px",
      color: colors.textPrimary,
      fontFamily: fonts.sanSerif,
      letterSpacing: 0,
    },
    h3: {
      tag: "1.3em",
      fontSize: 21,
      fontWeight: "bold",
      color: colors.textPrimary,
      fontFamily: fonts.sanSerif,
      letterSpacing: 0,
    },
    h4: {
      tag: "h4",
      fontSize: 20,
      fontWeight: "bolder",
      color: colors.textPrimary,
      fontFamily: fonts.sanSerif,
      letterSpacing: 0,
    },
    h5: {
      tag: "h5",
      fontSize: 18,
      fontWeight: "bolder",
      color: colors.textPrimary,
      fontFamily: fonts.sanSerif,
      letterSpacing: 0,
    },
    h6: {
      tag: "h6",
      fontSize: 16,
      fontWeight: "bolder",
      color: colors.textPrimary,
      fontFamily: fonts.sanSerif,
      letterSpacing: 0,
    },
  },
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.accentColor,
    },
    error: {
      main: colors.errorColor,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    background: {
      default: colors.backgroundColor,
    },
  },
});
