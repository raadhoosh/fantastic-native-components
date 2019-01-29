import * as React from "react";
import StyledTextInput from "./TextInput.style";
import { ViewStyle, TextInputProps, View } from "react-native";
import { Theme } from "..";

import {
  Text
} from "../../components";

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
  label?: string;
}

const TextInput = (props: IProps) => {

  return (
    <View>
      <Text>{props.label}</Text>
      <StyledTextInput {...props} />
    </View>
  )

};

export default TextInput;
