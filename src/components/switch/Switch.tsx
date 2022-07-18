import React, { ChangeEvent } from "react";
import { StyledFormControl, StyledStack, StyledSwitch, StyledLabel, StyledLegend  } from "./Switch.styles";

export interface ISwitchProps {
    id: string;
    labelLeft: string;
    labelRight: string;
    className?: string;
    legend?: string;
    checked?: boolean;
    onChange?:
      | ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
      | undefined;
  }

const SwitchButton = ({ 
    id,
    labelLeft,
    labelRight,
    legend,
    onChange,
    className,
    checked, 
}: ISwitchProps): JSX.Element => {
    return (
        <StyledFormControl className={className}>
        {legend ? <StyledLegend>{legend}</StyledLegend> : <></>}
        <StyledStack direction="row" spacing={1} alignItems="center">
          <StyledLabel>{labelLeft}</StyledLabel>
          <StyledSwitch id={id} onChange={onChange} checked={checked} />
          <StyledLabel>{labelRight}</StyledLabel>
        </StyledStack>
      </StyledFormControl>
)};

export default SwitchButton;
