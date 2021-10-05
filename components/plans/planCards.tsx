import React from "react";
// Styles
import { PlanCards as PlanCardsStyled } from "@styles/components/plans";

export const PlanCards: React.FC = ({ children }) => {
  return <PlanCardsStyled>{children}</PlanCardsStyled>;
};
