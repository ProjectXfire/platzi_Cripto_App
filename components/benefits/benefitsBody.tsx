import React from "react";
// Styles
import { BenefitsBody as BenefitsBodyStyled } from "@styles/components/benefits";

export const BenefitsBody: React.FC = ({ children }) => {
  return <BenefitsBodyStyled>{children}</BenefitsBodyStyled>;
};
