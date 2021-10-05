import React from "react";
import Image from "next/image";
// Styles
import { BenefitsIcon as BenefitsIconStyled } from "@styles/components/benefits";

type BenefitsIconProps = {
  icon: string;
};

export const BenefitsIcon = ({ icon = "" }: BenefitsIconProps) => {
  return (
    <BenefitsIconStyled>
      <Image src={icon} alt="icon"></Image>
    </BenefitsIconStyled>
  );
};
