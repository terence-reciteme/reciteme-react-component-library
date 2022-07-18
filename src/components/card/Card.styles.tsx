import { Card as MuiCard, Divider } from "@mui/material";
import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import Button from "../button/Button";

export const StyledCard = styled(MuiCard)`
&& {
    min-width: 300px;
    max-width: 320px;
    border: 2px solid ${defaultTheme.colors.white};
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px ${defaultTheme.colors.lightGrey};
}
`;

export const StyledDivider = styled(Divider)`
&& {
    border-color: ${defaultTheme.colors.grey};
    margin: 1.5rem 0;
}
`;

export const StyledButton = styled(Button)`
&& {
   display: flex;
   justify-content: flex-end; 
}
`;

