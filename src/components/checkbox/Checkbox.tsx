import React from "react";
import { Label, StyledCheckbox } from "./Checkbox.styles"

export interface ICheckboxProps {
  id?: string;
  label: string;
  disabled?: boolean;
}

const Checkbox = ({
  id,
  label,
  disabled = false,
}: ICheckboxProps): JSX.Element => {
  return (
  <Label
    control={<StyledCheckbox id={id} disabled={disabled} />}
    label={label}
  />
);
  }
export default Checkbox;
