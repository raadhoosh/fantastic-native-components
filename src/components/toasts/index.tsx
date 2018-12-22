import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  Dimensions
} from 'react-native';
// import { Icon, Text } from "../../components";
import { StyledToasts } from "./Toast.style";
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
  onPress?: () => void;
  disabled?: boolean;
  borderRadius?: string;
  checked?: boolean;
  message?: string;
  modalShown?: boolean;
}

let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height

class Toasts extends Component<IProps, IState> {

  constructor(props: IProps, ) {
    super(props)
    this.animatedValue = new Animated.Value(0)
    this.animatedXValue = new Animated.Value(-windowWidth)
   
    this.callToast = this.callToast.bind(this)
  }

  componentDidMount() {

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
      }).start(this.closeToast())
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

  // callXToast() {
  //   Animated.timing(
  //     this.animatedXValue,
  //     {
  //       toValue: 0,
  //       duration: 350
  //     }).start(this.closeXToast())
  // }

  // closeXToast() {
  //   setTimeout(() => {
  //     Animated.timing(
  //       this.animatedXValue,
  //       {
  //         toValue: -windowWidth,
  //         duration: 350
  //       }).start()
  //   }, 2000)
  // }

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
          <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            {this.props.message}
          </Text>
        </StyledToasts>

        <Animated.View style={{
          transform: [{ translateX: this.animatedXValue }],
          height: 70, marginTop: windowHeight - 70, backgroundColor: 'green', position: 'absolute', left: 0,
          top: 0, width: windowWidth, justifyContent: 'center'
        }}>
          <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Success!</Text>
        </Animated.View>

      </View>
    );
  }
}

export default Toasts;
