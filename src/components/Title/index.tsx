import * as React from "react";
import StTitle, { StText } from "./title.style";
import { ViewStyle, TextStyle } from "react-native";

export interface IProps {
  theme?: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  center?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

export default function ({ children, textStyle, ...others }: IProps) {
  function renderChild(element: JSX.Element | JSX.Element[] | string) {
    if (typeof element === "string") {
      return <StText style={textStyle}>{element}</StText>;
    }
    return element;
  }
  return (
    <StTitle {...others}>
      {renderChild(children)}
    </StTitle>
  );
}