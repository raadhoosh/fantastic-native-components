import * as React from "react";
import StRight from "./Right.style";
import { ViewStyle } from "react-native";
export interface IProps {
  theme?: any;
  style?: ViewStyle;
  children: JSX.Element | JSX.Element[];
}

export default function ({ children, ...others }: IProps) {
  return (
    <StRight {...others}>
      {children}
    </StRight>
  );
}