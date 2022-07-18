import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { defaultTheme } from "../../theme/theme";

const StyledTypography = styled(Typography)`
    
    && {
        &.MuiTypography-h1,
        &.MuiTypography-h2,
        &.MuiTypography-h3,
        &.MuiTypography-h4,
        &.MuiTypography-h5,
        &.MuiTypography-h6,
        &.MuiTypography-paragraph {
            font-family: ${defaultTheme.fonts.sanSerif};
            color: ${defaultTheme.colors.textPrimary};
            letterSpacing: 0,
        }

        &.MuiTypography-h1 {
            fontSize: "3em";
            fontWeight: "500";
        }

        &.MuiTypography-h2 {
            fontSize: "1.5em";
            fontWeight: "bold";
        }

        &.MuiTypography-h3 {
            fontSize: "1.3em";
            fontWeight: "bold";
        }

        &.MuiTypography-h4 {
            fontSize: "1.25em";
            fontWeight: "bolder";
        }

        &.MuiTypography-h5 {
            fontSize: "1.125em";
            fontWeight: "bolder";
        }

        &.MuiTypography-h6 {
            fontSize: "1em";
            fontWeight: "bolder";
        }
    
        &.MuiTypography-paragraph {
            fontSize: "1em";
            fontWeight: "normal";
        }
    }
`;

export default StyledTypography;