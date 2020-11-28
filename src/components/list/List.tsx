import React, { ReactNode } from "react";

import styled from "styled-wind";

export interface ListProps {
  type: "ordered" | "unordered";
  listStyleNone: boolean;
  children: ReactNode;
}

const StyledOrderedList = styled.ol`
  ${(props: { listStyleNone: boolean }) =>
    props.listStyleNone &&
    `
    list-style: none;
    padding-inline-start: 0;
    `}
`;
const StyledUnorderedList = styled.ul`
  ${(props: { listStyleNone: boolean }) =>
    props.listStyleNone &&
    `
    list-style: none;
    padding-inline-start: 0;
    `}
`;

const List = ({ type, children, listStyleNone }: ListProps) => {
  return type === "ordered" ? (
    <StyledOrderedList listStyleNone={listStyleNone}>
      {children}
    </StyledOrderedList>
  ) : (
    <StyledUnorderedList listStyleNone={listStyleNone}>
      {children}
    </StyledUnorderedList>
  );
};

export default List;
