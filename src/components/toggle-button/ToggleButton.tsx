import React from "react";
import { StyledToggle, StyledToggleButtonGroup  } from "./ToggleButton.styles";

export interface IToggleProps {
    id?: string;
    value?: string;
    ariaLabel?: string;
    children: React.ReactNode;
}

const ToggleButton = ({
    id,
    value,
    ariaLabel,
    children
}: IToggleProps ): JSX.Element => {

    return (
        <StyledToggleButtonGroup>
            <StyledToggle id={id} value={value} aria-label={ariaLabel} >
                {children}
            </StyledToggle>
        </StyledToggleButtonGroup>
    );
};

export default ToggleButton;
