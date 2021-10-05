import React from "react";
import Image from "next/image";
// Components
import { Title, Text } from "@styles/shared";
// Styles
import { colors } from "@styles/variables/colors";
import { BenefitsItem as BenefitsItemStyled } from "@styles/components/benefits";

type BenefitsItemProps = {
  icon?: string;
  title?: string;
  text?: string;
};

export const BenefitsItem = ({ icon = "", title, text }: BenefitsItemProps) => {
  return (
    <BenefitsItemStyled>
      <Image src={icon} alt="icon"></Image>
      <Title size="2rem" color={colors.white}>
        {title}
      </Title>
      <Text size="1.2rem" color={colors.grey}>
        {text}
      </Text>
    </BenefitsItemStyled>
  );
};
