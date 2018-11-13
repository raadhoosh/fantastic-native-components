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
function renderChild(element: JSX.Element | JSX.Element[] | string, textStyle?: TextStyle) {
  if (typeof element === "string") {
    return <StText style={textStyle}>{element}</StText>;
  }
  return element;
}
export default ({ children, textStyle, ...others }: IProps) => {
  return (
    <StTitle {...others}>
      {renderChild(children, textStyle)}
    </StTitle>
  );
};