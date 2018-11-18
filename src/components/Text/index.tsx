import * as React from "react";
import StText from "./text.style";
import { Theme } from '..';
import { TextStyle } from "react-native";

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
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  fontSize?: number;
  theme?: Theme;
}

const Text = (props: IProps) => {

  return (
    <StText {...props}> {props.children} </StText>
  );
};

export default Text;
