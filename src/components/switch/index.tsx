import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "../../components";
import { StyledSwitch } from "./Switch.style";
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

class Switch extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.disabled ? undefined : this.props.onPress}
      >      
        <StyledSwitch {...this.props}
          value={true}               
        />         
      </TouchableOpacity>
    );
  }
}

export default Switch;
