import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { FormControlLabel } from "@mui/material";

export const StyledRadioButton = styled(FormControlLabel)`

     
    .MuiSvgIcon-root{
        font-size: 1.125em;
        color: ${defaultTheme.colors.reciteDarkBlue};
    }
    
    .MuiFormControlLabel-label {
        font-family: ${defaultTheme.fonts.sanSerif};
        color: ${defaultTheme.colors.textPrimary};
    }
    
        &:hover {
            background-color: transparent;
        }
`;

