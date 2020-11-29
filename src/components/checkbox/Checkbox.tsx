import React, { MouseEvent } from "react";

import styled from "styled-wind";

export interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  size?: "small" | "medium" | "large";
  style?: {};
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

const checkboxSizeStyle = {
  small: `
    height: 0.75rem;
    width: 0.75rem;
  `,
  medium: `
    height: 1rem;
    width: 1rem;
  `,
  large: `
    height: 1.25rem;
    width: 1.25rem;
  `,
};

const StyledCheckboxContainer = styled.div`
  .cursor-pointer;  
  .flex;
  .items-center;
`;

const StyledCheckbox = styled.input`
  .cursor-pointer;  
  ${(props: CheckboxProps) =>
    (props.size === "small" && checkboxSizeStyle.small) ||
    (props.size === "medium" && checkboxSizeStyle.medium) ||
    (props.size === "large" && checkboxSizeStyle.large)};
`;

const StyledLabel = styled.label`
  .cursor-pointer;
  .ml-3;
`;

const Checkbox = ({
  id,
  label = "",
  checked = false,
  size = "medium",
  onClick,
  style,
}: CheckboxProps) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        size={size}
        onClick={onClick}
        style={style}
        readOnly
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
