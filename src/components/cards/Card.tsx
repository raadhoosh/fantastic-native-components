import * as React from "react";
import { StyledCard } from "./Cards.style";
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
  color?: string;
  width?: string;
  theme?: Theme;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: string | number;
  borderRadius?: string;
}

const Card = (props: IProps) => {

  return (
    <StyledCard {...props} activeOpacity={0.8} onPress={props.disabled ? undefined : props.onPress} >
      {props.children}
    </StyledCard>
  );
};

export default Card;
