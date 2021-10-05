import React, { useEffect, useState } from "react";
import Image from "next/image";
// Providers
import { useMediaQuery } from "react-responsive";
// Images
import arrow from "@public/icons/orange-right-arrow.svg";
import rightArrow from "@public/icons/right-arrow.svg";
// Components
import { Title, Text } from "@styles/shared";
// Styles
import {
  PlanCard as PlanCardStyled,
  SymbolPrice,
  CardButton,
  CardFloatText,
  PlanCardWithArrow,
  RotateArrowImg,
  ArrowImg,
} from "@styles/components/plans";

type PlanCardProps = {
  headerText?: string;
  title?: string;
  textValue?: string;
  text?: string;
  btnText?: string;
  floatText?: boolean;
  indexCardActive?: number;
  index?: number;
  nextCard?: (index: number) => void;
  backCard?: (index: number) => void;
  onClick?: (...arg: any) => void;
};

export const PlanCard = ({
  headerText,
  title,
  textValue,
  text,
  btnText,
  floatText,
  index = 0,
  indexCardActive,
  nextCard = () => ({}),
  backCard = () => ({}),
  onClick = () => ({}),
}: PlanCardProps) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isTabletOrMobile);
  }, [isTabletOrMobile]);

  return (
    <>
      {index === indexCardActive || !visible ? (
        <PlanCardWithArrow>
          {visible && (
            <RotateArrowImg
              src={rightArrow}
              alt="right_arrow"
              onClick={() => {
                backCard(index);
              }}
            />
          )}

          <PlanCardStyled>
            {floatText && <CardFloatText>{headerText}</CardFloatText>}
            <Title align="center" noMargin size="2rem">
              {title}
            </Title>
            <SymbolPrice>
              <span>
                <strong>$</strong>
              </span>
              <Text align="center" size="7rem" weight="bold" noMargin>
                {textValue}
              </Text>
            </SymbolPrice>
            <Text align="center" size="1.2rem">
              {text}
            </Text>
            <CardButton onClick={onClick}>
              <strong>{btnText}</strong> <Image src={arrow} alt="arrow" />
            </CardButton>
          </PlanCardStyled>
          {visible && (
            <ArrowImg
              src={rightArrow}
              alt="right_arrow"
              onClick={() => nextCard(index)}
            />
          )}
        </PlanCardWithArrow>
      ) : (
        <></>
      )}
    </>
  );
};
