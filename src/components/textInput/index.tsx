import * as React from "react";
import StyledTextInput from "./TextInput.style";
import { ViewStyle, TextInputProps } from "react-native";
import { Theme } from "..";

interface IProps extends TextInputProps {
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
  color?: string;
  width?: string;
  theme?: Theme;
  fontSize?: string | number;
  borderRadius?: string;
  inverse?: boolean;
  borderColor?: string;
}

const TextInput = (props: IProps) => {

  return (
    <StyledTextInput {...props} />)

};

export default TextInput;
