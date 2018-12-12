import * as React from "react";
import { BadgeText, BadgeWrapper } from "./Badge.style";
import { ViewStyle } from "react-native";
import { Theme } from '..';

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  style?: ViewStyle | object | Array<ViewStyle>;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  inverse?: boolean;
  backgroundColor?: string;
  BorderColor?: string;
  color?: string;
  width?: string | number;    
  height?: string | number;  
  theme?: Theme;   
  fontSize?: string | number;
  borderRadius?: number;
}

const Badge = (props: IProps) => {

  return (
    <BadgeWrapper {...props}>
      <BadgeText {...props}>
        {props.children}
      </BadgeText>
    </BadgeWrapper>
  );
};

export default Badge;
