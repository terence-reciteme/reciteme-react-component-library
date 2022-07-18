import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { ToggleButton as Toggle, ToggleButtonGroup } from '@mui/material';

export const StyledToggle = styled(Toggle)`

        && {
            font-size: 0.7em;
            background-color: ${defaultTheme.colors.lightGrey};
            border-radius: 25px;
            height: 35px;
            margin-right: 5px;
        }
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    && {
   
    }
`;