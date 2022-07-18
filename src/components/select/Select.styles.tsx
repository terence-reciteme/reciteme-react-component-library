import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { MenuItem, FormControl, Select } from "@mui/material";

export const StyledSelect = styled(Select)`
 && {
    .MuiFormLabel-colorPrimary, .MuiOutlinedInput-input {
      font-family: ${defaultTheme.fonts.sanSerif};
      color: ${defaultTheme.colors.textPrimary };
      }
    
    .MuiOutlinedInput-notchedOutline,	.MuiOutlinedInput-input, .MuiInputLabel-formControl, 
    .MuiInputLabel-animated, .MuiSelect-select, .MuiSelect-outlined, .MuiOutlinedInput-input,
    .MuiInputBase-input {
      border-color: ${defaultTheme.colors.reciteDarkBlue};
      color: ${defaultTheme.colors.textPrimary };
      border-width: 1px;
      border-radius: 10px;
      top: 0;
    }
  }
`;

export const Option = styled(MenuItem)`
    font-size: 12px;
    font-family: ${defaultTheme.fonts.sanSerif};
    .MuiPopover-paper {
    margin-top: 5px;
    }
`;


export const StyledFormControl = styled(FormControl)`
    && {
    min-width: 120px; 
    color: ${defaultTheme.colors.textPrimary};
    }
`;
