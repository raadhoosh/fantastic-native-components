import * as React from "react";
import StText from "./Text.style";
import { Theme } from '..';
import { TextStyle, TextProps } from "react-native";

interface IProps extends TextStyle ,TextProps{  
  children: JSX.Element | JSX.Element[] | string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;    
  theme?: Theme;    
}

const Text = (props: IProps) => {

  return (
    <StText {...props}/>
  );
};

export default Text;
