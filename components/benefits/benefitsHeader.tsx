import React from "react";
// Styles
import { BenefitsHeader as BenefitsHeaderStyled } from "@styles/components/benefits";

export const BenefitsHeader: React.FC = ({ children }) => {
  return <BenefitsHeaderStyled>{children}</BenefitsHeaderStyled>;
};
