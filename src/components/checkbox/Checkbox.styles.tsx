import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const Label = styled(FormControlLabel)`

    .MuiSvgIcon-root {
        font-size: 1.125em;
        color: ${defaultTheme.colors.reciteDarkBlue};
    }

    .MuiFormControlLabel-label {
        font-family: ${defaultTheme.fonts.sanSerif};
        color: ${defaultTheme.colors.textPrimary};
        margin-right: 0;
        margin-left: 0;
    }

`;

export const StyledCheckbox = styled(MuiCheckbox)`
  && .MuiCheckbox-root.Mui-checked {
    border-radius: 0;
    color: ${defaultTheme.colors.reciteDarkBlue};
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }
  }
`;