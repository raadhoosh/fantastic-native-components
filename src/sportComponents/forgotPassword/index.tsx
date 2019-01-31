import React, { Component } from "react";
import { TextInput, Button, Text } from "../../components";
import { StyledLogin, StyledTitle, StyledMessage } from "./ForgotPassword.style";
import { Theme } from "..";
import { View, TouchableOpacity } from 'react-native';

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
  handleForgotPassword?: () => void;
  disabled?: boolean;
  borderRadius?: string;
  checked?: boolean;
  changeIcon?: boolean,
}

interface State {
  changeIcon?: boolean;
}

class Login extends Component<IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      changeIcon: false,
    };
  }

  handleForgotPassword = () => {
    this.props.handleForgotPassword && this.props.handleForgotPassword();
  }

  render() {
    return (
      <StyledLogin {...this.props}>
        <StyledTitle>
          Forgot your password?
          </StyledTitle>
        <Text>
          block
              leading-normal
              mb-16
              text-center
          </Text>
        <View
          style={{ marginTop: 16, backgroundColor: "#000" }}
        >
          <TextInput
            label="Email"
            inverse
            borderColor={"#acafb2"}
            placeholder={"Enter your email"}
            placeholderTextColor={"#797979"}
            height={48}
          />
        </View>

        <View
          style={{ marginTop: 16, backgroundColor: "#000" }}
        >
          <TextInput
            label="Password"
            inverse
            borderColor={"#acafb2"}
            placeholder={"Enter your email"}
            placeholderTextColor={"#797979"}
            height={48}
            icon={`${this.state.changeIcon ? "eye" : "eye-slash"}`}
            onPressIcon={() => {
              this.setState({
                changeIcon: !this.state.changeIcon
              })
            }}
          />
        </View>

        <View
          style={{ marginTop: 26, backgroundColor: "#000" }}
        >
          <Button
            danger
            height={"48px"}
            fontSize={16}
          >
            Send reset link
        </Button>
        </View>

        <StyledMessage >
          <TouchableOpacity
            onPress={this.handleForgotPassword}
          >
            <Text
              info
              style={{ paddingLeft: 5 }}
            >
              Need more help?
        </Text>
          </TouchableOpacity>
        </StyledMessage>

        <View
          style={{ marginTop: 26, backgroundColor: "#000" }}
        >
          <Button
            danger
            height={"48px"}
            fontSize={16}
          >
            Send reset link
        </Button>
        </View>
      </StyledLogin >
    );
  }
}

export default Login;
