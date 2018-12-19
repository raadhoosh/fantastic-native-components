import React, { Component } from "react";
import { TabText, TabWrapper } from "./Tabs.style";
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View                // Container component
} from 'react-native';

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

class CheckBox extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <TabWrapper {...this.props} >
        {this.props.children}
      </TabWrapper>
    );
  }
}

export default CheckBox;
