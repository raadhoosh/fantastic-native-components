import React, { Component } from "react";
import {
  View,
  Animated,
  Dimensions
} from 'react-native';

import { StyledToasts, StyledToastsText } from "./Toast.style";
import { Theme } from "..";

export interface IState {
  message: string;
  modalShown: boolean;
}

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
  borderRadius?: string;
  message?: string;
  modalShown?: boolean;
  borderColor?: string;
}

class Toasts extends Component<IProps, IState> {
  animatedValue: Animated.Value;

  constructor(props: IProps, ) {
    super(props)
    this.animatedValue = new Animated.Value(0)

    this.callToast = this.callToast.bind(this)
    this.closeToast = this.closeToast.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps: IProps) {

    if (nextProps.modalShown) {
      this.callToast();
    }
  }

  callToast() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 350
      }).start(() => this.closeToast());
  }

  closeToast() {
    setTimeout(() => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 0,
          duration: 350
        }).start()
    }, 2000)
  }

  render() {

    let animation = this.animatedValue.interpolate({
      inputRange: [0, .3, 1],
      outputRange: [-70, -10, 0]
    })

    return (
      <View>
        <StyledToasts {...this.props} style={{
          transform: [{ translateY: animation }]
        }}>
          <StyledToastsText {...this.props}>
            {this.props.message}
          </StyledToastsText>
        </StyledToasts>

      </View>
    );
  }
}

export default Toasts;
