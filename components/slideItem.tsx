import React, { useEffect, useState } from "react";
import Image from "next/image";
// Providers
import { useMediaQuery } from "react-responsive";
// Components
import { Table } from "@components/table";
// Images
import trendingDown from "@public/icons/trending-down.svg";
import trendingUp from "@public/icons/trending-up.svg";
import rightArrow from "@public/icons/right-arrow.svg";
// Styles
import { colors } from "@styles/variables/colors";
import { Title, Message, Icon, ShowHideContainer } from "@styles/shared";
import { TableItem, TableSlide, TableRow } from "@styles/components/table";

type ItemProps = {
  index?: number;
  indexActive?: number;
  title?: string;
  titleColor?: string;
  messageColor?: string;
  nextSlide: (index: number) => void;
  data: any[];
};

export const SlideItem = ({
  index = 0,
  indexActive,
  title,
  titleColor,
  messageColor,
  nextSlide,
  data,
}: ItemProps) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 510px)" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isTabletOrMobile);
  }, [isTabletOrMobile]);

  return (
    <ShowHideContainer
      active={index === indexActive || !visible ? true : false}
    >
      <Title color={titleColor}>
        <strong>{title}</strong>
      </Title>
      <TableSlide>
        <Table>
          {data.map((coin, index) => (
            <TableRow key={index} column="2" size="1.5rem" color={colors.grey}>
              <TableItem size="1.5rem" color={colors.grey}>
                {coin.name}
              </TableItem>
              <TableItem selectable size="1.5rem" color={colors.grey}>
                $ {coin.value}
                {coin.status === null || coin.status === undefined ? (
                  <></>
                ) : coin.status ? (
                  <Icon>
                    <Image src={trendingUp} alt="down_arrow" />
                  </Icon>
                ) : (
                  <Icon>
                    <Image src={trendingDown} alt="down_arrow" />
                  </Icon>
                )}
              </TableItem>
            </TableRow>
          ))}
        </Table>
        {visible && (
          <Icon onClick={() => nextSlide(index)}>
            <Image src={rightArrow} alt="right_arrow" />
          </Icon>
        )}
      </TableSlide>
      <Message size="1.2rem" bkgColor={messageColor}>
        <strong>Actualizado:</strong> 19 Julio 23:45
      </Message>
    </ShowHideContainer>
  );
};
