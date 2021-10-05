import React from "react";
// Styles
import { Table as TableStyled } from "@styles/components/table";

type TableProps = {
  children?: React.ReactNode;
  column?: number;
};

export const Table = ({ children, column }: TableProps) => {
  return <TableStyled column={column}>{children}</TableStyled>;
};
