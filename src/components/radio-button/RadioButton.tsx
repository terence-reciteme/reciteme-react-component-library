import React from "react";
import { Radio } from "@mui/material";
import  { StyledRadioButton } from "./Radio.styles"

export interface IRadioButtonProps {
  label: string;
  value: string;
  id: string;
}

const RadioButton = ({ 
  label, 
  value, 
  id 
}: IRadioButtonProps): JSX.Element => (
  <StyledRadioButton value={value} id={id} label={label} control={<Radio />}/>
);
export default RadioButton;
