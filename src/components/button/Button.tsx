import React from "react";
import StyledButton from "./Button.styles";

export interface IPrimaryButtonProps {
  className?: string;
  children?: React.ReactNode;
  loading?: boolean;
  iconOnly?: boolean;
  iconPosition?: "start" | "end";
  buttonIcon?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  ariaLabel?: string;
  width?: string;
  buttonVariant: "red" | "yellow" | "outlined" | "darkblue";
}

const Button = ({
  className,
  children,
  loading = false,
  width,
  buttonVariant,
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
    buttonVariant={buttonVariant}
    startIcon={buttonIcon && iconPosition === "start" && buttonIcon}
    endIcon={buttonIcon && iconPosition === "end" && buttonIcon}
    className={className}
    loading={loading}
    iconOnly={iconOnly}
    loadingPosition="center"
    width={width}
    {...rest}

  >
    {loading  ? !children : children}
  </StyledButton>
);

export default Button;
