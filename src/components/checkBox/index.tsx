import React, { Component } from "react";
import { TouchableOpacity, View, AccessibilityProps } from "react-native";
import { Icon, Text } from "../../components";
import { StyledCheckBox } from "./CheckBox.style";
import { Theme } from "..";

export interface IProps extends AccessibilityProps {
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
  width?: string;
  theme?: Theme;
  onChange?: () => void;
  disabled?: boolean;
  fontSize?: string | number;
  borderRadius?: string;
  label?: string;
  name?: "checkbox";
  checked?: boolean;
}

class CheckBox extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.disabled ? undefined : this.props.onChange}
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
