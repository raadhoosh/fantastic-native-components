import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon, Text } from "../../components";
import { StyledCheckBox } from "./CheckBox.style";
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
      <TouchableOpacity
        onPress={this.props.disabled ? undefined : this.props.onPress}
      >
        <StyledCheckBox {...this.props}>
          {this.props.checked && (
            <Icon name="check" type="FontAwesome" size={12} color="#fff" />
          )}
        </StyledCheckBox>
      </TouchableOpacity>
    );
  }
}

export default CheckBox;
