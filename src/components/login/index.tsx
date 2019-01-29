import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon, Text, TextInput } from "../../components";
import { StyledLogin } from "./Login.style";
import { Theme } from "..";

export interface IProps {
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
  width?: number | string;
  height?: number | string;
  theme?: Theme;
  onPress?: () => void;
  disabled?: boolean;
  borderRadius?: string;
  checked?: boolean;
}

class Login extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <StyledLogin {...this.props}>
        <TextInput
          label="Email"  
          inverse       
        />
        <TextInput />
      </StyledLogin>
    );
  }
}

export default Login;
