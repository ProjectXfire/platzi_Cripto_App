import React from "react";
import Link from "next/link";
import Image from "next/image";
// Images
import batata from "@public/icons/batata.svg";
// Styles
import { Footer as FooterStyled } from "@styles/components/footer";
import { Text } from "@styles/shared";
import { colors } from "@styles/variables/colors";

export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <Text size="1.2rem" color={colors.white}>
          <Link href="/">Linkedin</Link>
        </Text>
        <Text size="1.2rem" color={colors.white}>
          <Link href="/">Crunchbase</Link>
        </Text>
        <Text size="1.2rem" color={colors.white}>
          <Link href="/">Hackernews</Link>
        </Text>
      </div>
      <div>
        <Image src={batata} alt="batata"></Image>
        <Text size="0.8rem" color={colors.offWhite}>
          *Batatabit 2020
        </Text>
      </div>
    </FooterStyled>
  );
};
