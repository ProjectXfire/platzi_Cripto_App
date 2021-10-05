import styled from "styled-components";
import { colors } from "@styles/variables/colors";
import arrowDown from "@public/icons/down-arrow.svg";

export const Header = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px 20px;
  margin-bottom: 20px;
  color: ${colors.white};
  background: linear-gradient(
    200deg,
    ${colors.warnBlack} 20%,
    ${colors.bitcoinOrange} 100%
  );

  & a {
    position: absolute;
    width: 200px;
    left: calc(50% - 100px);
    bottom: -15px;
    padding: 10px 10px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: ${colors.warnBlack};
    background-color: ${colors.offWhite};
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5px;
`;
