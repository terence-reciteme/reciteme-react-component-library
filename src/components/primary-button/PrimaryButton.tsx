import { defaultTheme } from "../../theme/theme";
import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { ButtonProps } from "@mui/material";
import React from "react";

interface IButton {
  width?: string;
  iconOnly?: boolean;
}

const StyledButton = styled(LoadingButton)<IButton>`
  &.MuiButton-root {
    width: ${(props) => (props.width ? props.width : "auto")};
    color: ${(props) =>
      props.loading
        ? defaultTheme.colors.reciteRed
        : "#ffffff"};
    height: auto;
    font-weight: 700;
    font-size: 0.9375em;
    line-height: normal;
    padding: 13px 14px;
    border-radius: 5px;
    box-shadow: none;
    text-transform: none;
    background-color: ${defaultTheme.colors.reciteRed};

    &:hover {
      background-color: ${defaultTheme.colors.hoverRed};
    }
  }
  & .MuiLoadingButton-loadingIndicator {
    color: #ffffff;
    position: relative;
    display: block;
    font-size: 0.9375em;
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
`;

export interface IPrimaryButtonProps {
  className?: string;
  loading?: boolean;
  iconOnly?: boolean;
  children?: React.ReactNode;
  iconPosition?: "start" | "end";
  buttonIcon?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  ariaLabel?: string;
  width?: string;
}

const PrimaryButton = ({
  className,
  loading = false,
  children,
  width,
  buttonIcon,
  iconOnly,
  iconPosition = "start",
  type = "submit",
  ariaLabel,
  ...rest
}: IPrimaryButtonProps): JSX.Element => (
  <StyledButton 
    aria-label={ariaLabel}
    type={type}
    startIcon={buttonIcon && iconPosition === "start" && buttonIcon}
    endIcon={buttonIcon && iconPosition === "end" && buttonIcon}
    className={className}
    loading={loading}
    iconOnly={iconOnly}
    loadingPosition="center"
    width={width}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default PrimaryButton;
