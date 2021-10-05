import React from "react";
// Styles
import { Plans as PlansStyled } from "@styles/components/plans";

type PlansProps = {
  id: string;
  children: React.ReactNode;
};

export const Plans = ({ id, children }: PlansProps) => {
  return <PlansStyled id={id}>{children}</PlansStyled>;
};
