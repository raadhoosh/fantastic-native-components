import React, { Component } from "react";
import {
  Animated,
  Easing
} from 'react-native';
import { Icon } from "../../components";

import { StyledSpinners } from "./Spinner.style";

export interface IProps {
  type?: "Ionicons" | "Entypo" | "EvilIcons" | "Feather"
  | "FontAwesome" | "Foundation" | "MaterialIcons"
  | "MaterialCommunityIcons" | "Octicons"
  | "SimpleLineIcons" | "Zocial";
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  color?: string;
  size?: number;
  name: string;
}

class Spinners extends Component<IProps> {
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
      <StyledSpinners
        style={{
          transform: [{ rotate: spin }],
        }}>
        <Icon {...this.props} type={this.props.type ? this.props.type : "FontAwesome"} name={this.props.name} />
      </StyledSpinners>
    );
  }
}

export default Spinners;
