import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { Switch, FormLabel, FormControl, Stack, Typography  } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const StyledStack = styled(Stack)`
  && {
    .MuiTypography-root {
      font-size: 1em;
      font-weight: 400;
      color: ${defaultTheme.colors.textPrimary};
    }
  }
`;

export const StyledSwitch = styled(Switch)`
&& {
    width: 38px;
    height: 18px;
    padding: 0;
    margin-top: -2px;
    margin-bottom: 0;
    overflow: visible;

    .MuiSwitch-switchBase {
      padding: 0;
      margin: 1px;
      transition-duration: 300ms;
      border-radius: 50%;

      &.Mui-checked {
        transform: translateX(100%);
        color: ${defaultTheme.colors.white};

        & + .MuiSwitch-track {
          background-color: transparent;
          opacity: 1;
          border: solid ${defaultTheme.colors.reciteDarkBlue} 3px;
        }
        & .MuiSwitch-thumb {
          margin-left: 0;
        }
      }

      & .MuiSwitch-thumb {
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        margin: 4px 4px 0 4px;
        background-color: ${defaultTheme.colors.reciteDarkBlue};
      }
    }

    & .MuiSwitch-track {
      border-radius: 25px;
      background-color: transparent;
      opacity: 1;
      border: solid ${defaultTheme.colors.reciteDarkBlue} 3px;
    }
  }
`;

export const StyledLabel = styled(Typography)`
  && {
    font-family: ${defaultTheme.fonts.sanSerif};
    line-height: 26px
  }
`;

export const StyledLegend = styled(FormLabel)`
  && {
    margin-right: 15px;
  }
`;