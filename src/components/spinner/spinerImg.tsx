import React, { Component } from "react";
import {  
  Animated,
  Easing,
  ImagePropsBase
} from 'react-native';

import { StyledSpinnersImg } from "./Spinner.style";

export interface IProps extends ImagePropsBase {
  width?: number;
  height?: number;
}

class SpinnerImg extends Component<IProps> {
  spinValue: Animated.Value;

  constructor(props: IProps, ) {
    super(props)
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <StyledSpinnersImg
        {...this.props}
        style={{
          transform: [{ rotate: spin }]
        }}
        source={this.props.source}
      />
    );
  }
}

export default SpinnerImg;
