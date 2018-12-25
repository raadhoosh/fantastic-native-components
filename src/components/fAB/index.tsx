import * as React from "react";
import { FABText, FABWrapper, StyledIcon } from "./FAB.style";
import { ViewStyle } from "react-native";
import { Theme } from "..";

interface IProps {
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
  iconColor?: string;
  width?: number;
  height?: number;
  theme?: Theme;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: number;
  iconSize?: number;
  borderRadius?: string;
  iconName?: string;
  label?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  activeOpacity?: number;
}

const FAB = (props: IProps) => {

  return (
    <FABWrapper {...props} activeOpacity={props.activeOpacity ? props.activeOpacity : 0.7} onPress={props.disabled ? undefined : props.onPress} >
      <StyledIcon type="FontAwesome" name={props.iconName ? props.iconName : "plus"} size={props.iconSize} {...props} />
      {props.label && <FABText {...props}>
        {props.label}
      </FABText>}
    </FABWrapper>
  );
};

export default FAB;
