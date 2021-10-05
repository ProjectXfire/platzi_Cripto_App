import React from "react";
// Styles
import { Benefits as BenefitsStyled } from "@styles/components/benefits";

export const Benefits: React.FC = ({ children }) => {
  return <BenefitsStyled>{children}</BenefitsStyled>;
};
