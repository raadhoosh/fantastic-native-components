import * as React from "react";
import StTextInput from "./textInput.style";
import { ViewStyle } from "react-native";

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
  backgroundColor?: string;
  text?: string;
  color?: string;
  width?: string;
  margin?: string;
  theme?: any;
  onChangeText?(): any;
  placeholder?: string;
  value?: string;
  placeholderTextColor?: string;  
  fontSize?: string | number;
  borderRadius?: string;
  inverse?: boolean;
}

const TextInput = (props: IProps) => {

  return (
    <StTextInput {...props} editable={true} onChangeText={props.onChangeText} />)

};

export default TextInput;
