import styled, { keyframes, css } from "styled-components";
import { colors } from "@styles/variables/colors";
import Image from "next/image";

type PlanCard = {
  headerText?: string;
  title?: string;
  value?: string;
  text?: string;
  btnText?: string;
};

export const Plans = styled.section`
  padding: 30px 10px;
  background-color: ${colors.offWhite};
`;

export const PlanCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

export const PlanCard = styled.article`
  width: 220px;
  position: relative;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  border: 2px solid ${colors.white};
  &:hover {
    border: 2px solid ${colors.secundaryBlue};
  }
`;

export const PlanCardWithArrow = styled.div`
  display: flex;
  justify-content: center;
`;

export const RotateArrowImg = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
`;

export const ArrowImg = styled(Image)`
  cursor: pointer;
`;

export const CardFloatText = styled.p`
  position: absolute;
  top: -17px;
  right: calc(50% - 50px);
  width: 100px;
  padding: 7px 5px;
  background-color: ${colors.bitcoinOrange};
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  color: ${colors.white};
`;

export const SymbolPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  & span {
    margin-top: 15px;
    font-size: 1.5rem;
  }
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin: 0 auto;
  background-color: ${colors.offWhite};
  border: 2px solid ${colors.bitcoinOrange};
  border-radius: 5px;
  outline: none;
  & strong {
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
    color: ${colors.white};
    background-color: ${colors.secundaryBlack};
  }
  &:active {
    transform: scale(0.95);
  }
`;
