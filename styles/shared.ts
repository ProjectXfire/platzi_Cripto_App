import styled, { keyframes, css } from "styled-components";

type TitleProps = {
  size?: string;
  weight?: string;
  align?: "start" | "end" | "center" | "justify";
  color?: string;
  floating?: boolean;
  noMargin?: boolean;
};

type TextProps = {
  size?: string;
  color?: string;
  weight?: string;
  align?: "start" | "end" | "center" | "justify";
  noMargin?: boolean;
};

type MessageProps = {
  size?: string;
  color?: string;
  bkgColor?: string;
};

type ShowHideContainerProps = {
  active?: boolean;
};

const showSlide = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animation = css`
  animation: ${showSlide} 1s forwards;
`;

const Title = styled.div<TitleProps>`
  position: ${(props) => (props.floating ? "absolute" : "block")};
  width: 100%;
  top: 40px;
  margin-top: ${(props) => (props.noMargin ? "0px" : "15px")};
  margin-bottom: ${(props) => (props.noMargin ? "0px" : "15px")};
  text-align: ${(props) => (props.align ? props.align : "start")};
  font-size: ${(props) => (props.size ? props.size : "1.5rem")};
  color: ${(props) => (props.color ? props.color : "black")};
  line-height: 2.5rem;
  font-weight: bold;
`;

const Text = styled.p<TextProps>`
  text-align: ${(props) => (props.align ? props.align : "start")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  color: ${(props) => (props.color ? props.color : "black")};
  margin-top: ${(props) => (props.noMargin ? "0px" : "15px")};
  margin-bottom: ${(props) => (props.noMargin ? "0px" : "15px")}; ;
`;

const Message = styled.p<MessageProps>`
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 5px;
  font-size: ${(props) => (props.size ? props.size : "1.5rem")};
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) => (props.bkgColor ? props.bkgColor : "white")};
`;

const Icon = styled.span`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
`;

const ShowHideContainer = styled.div<ShowHideContainerProps>`
  display: ${(props) => (props.active ? "block" : "none")};
  ${animation}
`;

export { Title, Text, Message, Icon, ShowHideContainer };
