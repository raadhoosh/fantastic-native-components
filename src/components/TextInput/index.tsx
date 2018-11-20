import * as React from "react";
import StTextInput from "./textInput.style";
import { ViewStyle } from "react-native";
import { Theme } from '..';

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
  bgColor?: string;  
  color?: string;
  width?: string;  
  theme?: Theme;
  onChangeText?(): any;
  placeholder?: string;
  value?: string;
  placeholderTextColor?: string;  
  fontSize?: string | number;
  borderRadius?: string;
  inverse?: boolean;
  borderColor?: string;
}

const TextInput = (props: IProps) => {

  return (
    <StTextInput {...props} editable={true} onChangeText={props.onChangeText} />)

};

export default TextInput;
