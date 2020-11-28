import React, { ChangeEvent } from "react";

import styled from "styled-wind";

export interface TextInputProps {
  type: string;
  text?: string;
  style: {};
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextInput = styled.input`
  .font-sans;
  .rounded-sm;
  .text-base;
`;

const TextInput = ({ type, text = "", style, onChange }: TextInputProps) => {
  return (
    <StyledTextInput
      style={style}
      type={type}
      value={text}
      onChange={onChange}
    />
  );
};

export default TextInput;
