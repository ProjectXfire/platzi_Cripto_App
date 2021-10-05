import styled from "styled-components";
import { colors } from "@styles/variables/colors";

type TableProps = {
  column?: number;
};

type TableItemProps = {
  color?: string;
  size?: string;
  selectable?: boolean;
};

type TableRowProps = {
  color?: string;
  column?: string;
  size?: string;
};

export const TableSlide = styled.div`
  display: flex;
  align-items: center;
`;

export const Table = styled.div<TableProps>`
  width: 100%;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${colors.white};
  overflow: hidden;
`;

export const TableRow = styled.div<TableRowProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.column ? `repeat(${props.column}, 1fr);` : `repeat(1, 1fr);`};
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
`;

export const TableItem = styled.div<TableItemProps>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid ${colors.offWhite};
  &:hover {
    cursor: ${(props) => (props.selectable ? "pointer" : "auto")};
    text-decoration: ${(props) => (props.selectable ? "underline" : "none")};
    text-decoration-color: ${colors.secundaryBlue};
    text-decoration-thickness: 0.3rem;
  }
`;
