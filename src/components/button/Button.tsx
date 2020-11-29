import React, { MouseEvent } from "react";

import styled from "styled-wind";

export interface ButtonProps {
  type?: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  style?: any;
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const buttonSizeStyle = {
  small: `
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: `
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: `
    font-size: 16px;
    padding: 12px 24px;
  `,
};

const StyledButton = styled.button`
  .cursor-pointer;
  .font-sans;  
  .font-bold;
  .border-0;
  .rounded-sm;
  .inline-block;
  .leading-none;

  ${(props: ButtonProps) =>
    (props.size === "small" && buttonSizeStyle.small) ||
    (props.size === "medium" && buttonSizeStyle.medium) ||
    (props.size === "large" && buttonSizeStyle.large)};

  ${(props: ButtonProps) =>
    props.primary
      ? `
      color: white;
      background-color: #1ea7fd;
    `
      : `
      color: #333;
      background-color: transparent;
    `};
`;

StyledButton.defaultProps = {
  primary: false,
  size: "medium",
};

const Button = ({ label, style, backgroundColor, ...props }: ButtonProps) => {
  return (
    <StyledButton style={{ outline: "none", ...style }} {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;
