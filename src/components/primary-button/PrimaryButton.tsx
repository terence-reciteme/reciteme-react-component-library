import React from "react";
import styled from "@emotion/styled";
import { ButtonProps, Button } from "@mui/material";
import { defaultTheme } from "../../theme/theme";


interface IButton {
    width?: string;
}

const StyledButton = styled(Button)<IButton>`
  &.MuiButton-root {
    width: ${(props) => (props.width ? props.width : "auto")};
    height: auto;
    font-weight: 700;
    font-size: 0.9375em;
    line-height: normal;
    padding: 13px 14px;
    border-radius: 5px;
    box-shadow: none;
    text-transform: none;
    background-color: ${(props) =>
      props.variant === "outlined" || props.variant === "text"
        ? "none"
        : defaultTheme.colors.reciteRed};

    &:hover {
      background-color: ${defaultTheme.colors.hoverRed};
    }
  }
  & .MuiLoadingButton-loadingIndicator {
    color: ${(props) =>
      props.variant === "outlined" || props.variant === "text"
        ? defaultTheme.colors.reciteRed
        : "#ffffff"};

    position: relative;
    display: block;
    font-size: 0.9375em;
  }
`;

export interface IPrimaryButtonProps extends ButtonProps {
  className?: string;
  loading?: boolean;
  variant?: "text" | "outlined" | "contained";
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
  iconPosition = "start",
  variant = "contained",
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
    // loading={loading}
    variant={variant}
    width={width}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default PrimaryButton;

