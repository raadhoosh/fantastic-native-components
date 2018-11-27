import * as React from "react";
import StyledRight from "./Right.style";
import { ViewStyle } from "react-native";
import { Theme } from '..';

export interface IProps {
  theme?: Theme;
  style?: ViewStyle;
  children: JSX.Element | JSX.Element[];
}

export default function ({ children, ...others }: IProps) {
  return (
    <StyledRight {...others}>
      {children}
    </StyledRight>
  );
}