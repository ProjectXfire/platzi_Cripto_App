import styled from "styled-components";
import { colors } from "@styles/variables/colors";

export const Benefits = styled.section`
  position: relative;
  background-color: ${colors.warnBlack};
  padding: 20px 20px;
`;

export const BenefitsIcon = styled.span`
  position: absolute;
  top: -12px;
  right: calc(50% - 20px);
`;

export const BenefitsHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const BenefitsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
`;

export const BenefitsItem = styled.article`
  padding: 10px 15px;
  background-color: ${colors.secundaryBlack};
  box-shadow: 0px 0px 5px 1px #000000;
`;
