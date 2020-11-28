import React from "react";

import styled from "styled-wind";

interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  style?: {};
  onClick?: () => void;
}

const StyledCheckboxContainer = styled.div`
  .flex;
  .justify-center;
  .items-center;
`;

const StyledCheckbox = styled.input`
  .h-5;
  .w-5;
`;

const StyledLabel = styled.label`
  .ml-3;
`;

const Checkbox = ({
  id,
  label = "",
  checked = false,
  onClick,
  style,
}: CheckboxProps) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        onClick={onClick}
        style={style}
        readOnly
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
