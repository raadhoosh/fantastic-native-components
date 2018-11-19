import * as React from "react";
import { ButtonText, ButtonWrapper } from "./button.style";
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
  bgColor?: string;  
  color?: string;
  width?: string;
  margin?: string;
  theme?: Theme;
  onPress?(): any;
  disabled : boolean;
}

const Button = (props: IProps) => {

  return (
    <ButtonWrapper {...props} activeOpacity={0.8} onPress={props.onPress} >
      <ButtonText {...props}>
        {props.children}
      </ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
