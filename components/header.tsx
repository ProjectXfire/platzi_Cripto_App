import React from "react";
import Image from "next/image";
import Link from "next/link";
// Images
import logo from "@public/img/logo.svg";
import downArrowIcon from "@public/icons/down-arrow.svg";
// Styles
import { colors } from "@styles/variables/colors";
import {
  Header as HeaderStyled,
  HeaderContent,
} from "@styles/components/header";
import { Title, Text, Icon } from "@styles/shared";

export const Header = () => {
  return (
    <HeaderStyled>
      <Image src={logo} alt="logo" />
      <HeaderContent>
        <Title size="2.3rem" align="center">
          La próxima revolución en el intercambio de criptomonedas
        </Title>
        <Text size="1.5rem" align="center" color={colors.offWhite}>
          Batatabit te ayuda a navegar entre los diferentes precios y
          tendencias.
        </Text>
        <Link href="#plans">
          <a>
            Conoce Nuestros Planes!{" "}
            <Icon>
              <Image src={downArrowIcon} alt="down_arrow" />
            </Icon>
          </a>
        </Link>
      </HeaderContent>
    </HeaderStyled>
  );
};
