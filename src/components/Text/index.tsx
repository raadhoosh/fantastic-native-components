import * as React from "react";
import StText from "./text.style";
import { Theme } from '..';
import { TextStyle } from "react-native";

enum FontWeight {
  normal = "normal",
  bold = "bold",
  hundred = "100",
  twoHundred = "200",
  threeHundred = "300",
  fourHundred = "400",
  fiveHundred = "500",
  sixHundred = "600",
  sevenHundred = "700",
  eightHundred = "800",
  nineHundred = "900",
}
interface IProps {
  children?: JSX.Element | JSX.Element[] | string;
  style?: TextStyle | object | Array<TextStyle>;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  bgColor?: string;
  color?: string;
  margin?: string;
  fontWeight?: FontWeight | string | number;
  fontSize?: number;
  theme?: Theme;
}

const Text = (props: IProps) => {

  return (
    <StText {...props}> {props.children} </StText>
  );
};

export default Text;
