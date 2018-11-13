import * as React from "react";
import StTextInput from "./textInput.style";
import { ViewStyle } from "react-native";

interface IProps {  
  style?: ViewStyle | object | Array<ViewStyle>;
  /** This is a primary TextInput it out!. */
  primary?: boolean;
  /** This is a secondary TextInput it out!. */
  secondary?: boolean;
  /** This is a success TextInput it out!. */
  success?: boolean;
  /** This is a info TextInput it out!. */
  info?: boolean;
  /** This is a warning TextInput it out!. */
  warning?: boolean;
  /** This is a danger TextInput it out!. */
  danger?: boolean;
  /** This is a light TextInput it out!. */
  light?: boolean;
  /** This is a dark TextInput it out!. */
  dark?: boolean; 
  /** Description of prop "primary". */
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
}

const TextInput = (props: IProps) => {

  return (
    <StTextInput {...props} editable = {true}  onChangeText={props.onChangeText}/>) 
    
};

export default TextInput;
