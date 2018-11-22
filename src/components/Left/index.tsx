import * as React from "react";
import StLeft from "./Left.style";
import { ViewStyle } from "react-native";

export interface IProps {
  theme?: any;
  style?: ViewStyle;
  children: JSX.Element | JSX.Element[];
}

export default function ({ children, ...others }: IProps) {

  return (
    <StLeft {...others}>
      {children}
    </StLeft>
  );
}