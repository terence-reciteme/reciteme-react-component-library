import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputProps as StandardInputProps } from "@mui/material";
import { InputWrapper, Input, LabelContainer, Label } from "./TextField.styles";
  
  export interface ITextInputProps {
    id: string;
    label: string;
    className?: string;
    type?: "text" | "password";
    fieldInline?: boolean;
    textFieldInputProps?: Partial<StandardInputProps>;
  }
  
  const TextInput = ({
    id,
    label,
    className,
    type = "text",
    fieldInline,
    textFieldInputProps,
  }: ITextInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
  
  
    return (
      <InputWrapper fieldinline={fieldInline}>
        <LabelContainer fieldinline={fieldInline}>
          <Label fieldinline={fieldInline}>{label}</Label>
        </LabelContainer>
        <Input
          className={className}
          id={id}
          size="small"
          type={type === "password" && showPassword ? "text" : type}
          InputProps={{
            ...textFieldInputProps,
            endAdornment:
              type === "password" ? (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ) : null,
          }}
  
        />
      </InputWrapper>
    );
  };
  
  export default TextInput;
  