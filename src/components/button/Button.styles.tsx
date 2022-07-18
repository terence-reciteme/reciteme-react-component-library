import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { LoadingButton } from "@mui/lab";

interface IButton {
    width?: string;
    iconOnly?: boolean;
    buttonVariant: string;
    loading?: boolean;
  }
  
  const StyledButton = styled(LoadingButton)<IButton>`
    &.MuiButton-root {
      width: ${(props) => (props.width ? props.width : "auto")};
      color: ${(props) =>
        props.loading
          ? defaultTheme.colors.reciteRed
          : defaultTheme.colors.white};
      height: auto;
      font-weight: 700;
      font-size: 0.9375em;
      font-family: ${defaultTheme.fonts.sanSerif};
      line-height: normal;
      padding: 16px 14px;
      border-radius: 5px;
      box-shadow: none;
      text-transform: none;
  
      ${(props) =>
        props.buttonVariant === "red" &&
        css`
        color: ${defaultTheme.colors.white};
        background-color: ${defaultTheme.colors.reciteRed};
        &:hover {
          background-color: ${defaultTheme.colors.hoverRed};
        }
        & .MuiLoadingButton-loadingIndicator {
          color:${defaultTheme.colors.white};
        }
        `}
        ${(props) =>
          props.buttonVariant === "yellow" &&
          css`
          color: ${defaultTheme.colors.textPrimary};
          background-color: ${defaultTheme.colors.reciteYellow};
          &:hover {
            background-color: ${defaultTheme.colors.hoverYellow};
          }
          & .MuiLoadingButton-loadingIndicator {
            color:${defaultTheme.colors.textPrimary};
          }
          `}
          ${(props) =>
            props.buttonVariant === "outlined" &&
            css`
            color: ${defaultTheme.colors.textPrimary};
            border: solid 1px ${defaultTheme.colors.textPrimary};
            background-color: transparent;
            &:hover {
              color: ${defaultTheme.colors.lightGrey};
              background-color: ${defaultTheme.colors.textLight};
            }
            & .MuiLoadingButton-loadingIndicator {
              color:${defaultTheme.colors.textPrimary};
            }
            `}
            ${(props) =>
              props.buttonVariant === "darkblue" &&
              css`
              color: ${defaultTheme.colors.white};
              background-color: ${defaultTheme.colors.reciteDarkBlue};
              &:hover {
                background-color: ${defaultTheme.colors.hoverBlack};
              }
              & .MuiLoadingButton-loadingIndicator {
                color:${defaultTheme.colors.white};
              }
              `}
      }
    }
    & .MuiLoadingButton-loadingIndicator {
      position: relative;
      display: block;
      font-size: 0.9375em;
      line-height: normal;
    }
    .MuiLoadingButton-startIconLoadingCenter {
      display: none;
    }
    .MuiLoadingButton-endIconLoadingCenter {
      display: none;
    }
    .MuiButton-startIcon {
      margin: ${(props) => 
        props.iconOnly 
          ? "0 auto" 
          : "0 6px 0 0"
      }
    }
    .MuiButton-endIcon {
      margin: ${(props) => 
        props.iconOnly 
          ? "0 auto" 
          : "0 0 0 6px"
      }
    }
    &.MuiLoadingButton-loading {
      justify-content: ${(props) => 
        props.iconOnly
        ? "center"
        : "flex-start"
      }
    }
    .MuiSVGIcon-root {
      font-size: 0.9375em;
    }
  `;
  

  export default StyledButton;