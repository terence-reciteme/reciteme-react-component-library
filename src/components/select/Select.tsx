import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { StyledSelect, Option, StyledFormControl } from "./Select.styles";

export interface ISelectProps {
    id: string;
    label: string;
    labelId: string;
    options: {label: string, id: string }[];
    onChange: any;
    value: any
}

const SelectInput = ({ label, id, labelId, options, value, onChange}: ISelectProps): JSX.Element => {

  
  return (

      <StyledFormControl >
        <InputLabel  id={labelId}>{label}</InputLabel>

        <StyledSelect 
          labelId={labelId}
          id={id}
          onChange={onChange}
          value={value}
          >
        {
          options.map(({label, id}) => (
            <Option key={id} >{label}</Option>
            ))
          }

        </StyledSelect>

      </StyledFormControl>
  );
}

export default SelectInput;
