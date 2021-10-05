import React from "react";
// Styles
import { WildCard as WildCardStyled } from "@styles/components/wildCard";

export const WildCard: React.FC = ({ children }) => {
  return <WildCardStyled>{children}</WildCardStyled>;
};
