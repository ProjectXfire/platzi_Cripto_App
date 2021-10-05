import React from "react";
// Styles
import { Rates as RatesStyled } from "@styles/components/rates";

export const Rates: React.FC = ({ children }) => {
  return <RatesStyled>{children}</RatesStyled>;
};
