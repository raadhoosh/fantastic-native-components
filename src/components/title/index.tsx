import * as React from "react";
import { StyledText,StyledTitle } from "./Title.style";
import { ViewStyle, TextStyle } from "react-native";
import { Theme } from '..';

export interface IProps {
  theme?: Theme;
  style?: ViewStyle;
  textStyle?: TextStyle;
  center?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}
function renderChild(element: JSX.Element | JSX.Element[] | string, textStyle?: TextStyle) {
  if (typeof element === "string") {
    return <StyledText style={textStyle}>{element}</StyledText>;
  }
  return element;
}
export default ({ children, textStyle, ...others }: IProps) => {
  return (
    <StyledTitle {...others}>
      {renderChild(children, textStyle)}
    </StyledTitle>
  );
};