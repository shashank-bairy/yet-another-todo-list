import React, { ReactNode } from "react";

import styled from "styled-wind";

export interface ListItemProps {
  onClick?: () => void;
  style?: {};
  children: ReactNode;
}

const StyledListItem = styled.li`
  .w-full;
`;

const ListItem = ({ children, style, onClick }: ListItemProps) => {
  return (
    <StyledListItem onClick={onClick} style={style}>
      {children}
    </StyledListItem>
  );
};

export default ListItem;
