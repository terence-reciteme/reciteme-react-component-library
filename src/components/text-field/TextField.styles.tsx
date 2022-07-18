import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TextField, InputLabel, } from "@mui/material";

  interface IFormStyle {
    fieldinline?: boolean;
  }
  
  interface IInputWrapper {
    fieldinline?: boolean;
   
  }

export const InputWrapper = styled.div<IInputWrapper>`
    position: relative;
    .MuiFormHelperText-root {
      margin: -20px 0 20px auto;
      color: #e59222;
      font-weight: 900;
      font-size: 0.9375em;
      ${defaultTheme.breakpoints.down("md")} {
        width: 100%;
      }
    }
  
    ${(props) =>
      props.fieldinline &&
      css`
      display: flex;
      flex-wrap: no-wrap;
      align-items: center;
        ${defaultTheme.breakpoints.down("md")} {
          flex-wrap: wrap;
        }

        .MuiFormHelperText-root {
          width: 100%;
  
          ${defaultTheme.breakpoints.down("md")} {
            width: 100%;
          }
        }
  
        .MuiFormControl-root {
          width: 100%;
  
          .MuiOutlinedInput-root {
            width: 100%;
          }
          ${defaultTheme.breakpoints.down("md")} {
            width: 100%;
          }
        }
      `}
  `;
  
  
  export const Input = styled(TextField)`
    width: 100%;
  
    && {
      .MuiOutlinedInput-root {
        border-radius: 10px;
        height: 40px;
        margin-bottom: 12px;
      }
      .MuiOutlinedInput-notchedOutline {
        border-width: 1px;
      }
  
      .Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${defaultTheme.colors.reciteDarkBlue};
      }
    }
  `;
  
  export const LabelContainer = styled.div<IFormStyle>`
    ${(props) =>
      props.fieldinline &&
      css`
        text-align: right;
        margin-right: 3%;
        margin-bottom: 0;
        display: inline-block;
        line-height: 40px;
  
        ${defaultTheme.breakpoints.down("md")} {
          width: 100%;
          text-align: left;
          margin-bottom: 5px;
          margin-right: 0;
          display: block;
        }
      `}
  `;
  
  export const Label = styled(InputLabel)<IFormStyle>`
    color: ${defaultTheme.colors.textPrimary};
    font-family: ${defaultTheme.fonts.sanSerif};
    font-weight: bolder;
    margin-bottom: 12px;
    font-size: 1.125em;
  
    ${defaultTheme.breakpoints.down("md")} {
      margin-bottom: 0;
      font-size: 1em;
    }
  
    ${(props) =>
      props.fieldinline &&
      css`
        width: 100%;
        white-space: pre-line;
        font-size: 1.25em;
  
        ${defaultTheme.breakpoints.down("md")} {
          font-size: 1em;
        }
      `}
  `;
  