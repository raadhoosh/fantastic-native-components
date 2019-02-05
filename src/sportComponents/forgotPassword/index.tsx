import React, { Component } from "react";
import { TextInput, Button, Text } from "../../components";
import { StyledLogin, StyledTitle, StyledSupTitle, StyledMessage, StyledButtonWrapper } from "./ForgotPassword.style";
import { Theme } from "../../components";
import { View, TouchableOpacity } from "react-native";

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
  theme: Theme;
  onPress?: () => void;
  handleForgotPassword?: () => void;
  disabled?: boolean;
  borderRadius?: string;
  checked?: boolean;
  changeIcon?: boolean;
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
    // tslint:disable-next-line:no-unused-expression
    this.props.handleForgotPassword && this.props.handleForgotPassword();
  }

  render() {
    return (
      <StyledLogin {...this.props}>
        <StyledTitle {...this.props}>
          Forgot your password?
          </StyledTitle>

        <StyledSupTitle {...this.props}>
          Enter your Optus Sport email below and we will send you a link to get back into your account.
          </StyledSupTitle>

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

        <StyledMessage {...this.props} >
          <TouchableOpacity>
            <Text
              info
              style={{ paddingLeft: 5 }}
            >
              Need more help?
        </Text>
          </TouchableOpacity>
        </StyledMessage>

        <StyledButtonWrapper {...this.props}>

          <Button
            primary
            height={"48px"}
            fontSize={16}
            onPress={this.handleForgotPassword}
          >
            Back to login
        </Button>
        </StyledButtonWrapper>
      </StyledLogin >
    );
  }
}

export default Login;
