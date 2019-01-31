import React, { Component } from "react";
import { StyledTextInput, StyledLabel, StyledInputWrapper, StyledIconWrapper } from "./TextInput.style";
import { ViewStyle, TextInputProps, View } from "react-native";
import { Icon } from "../../components";
import { Theme } from "..";

interface IProps extends TextInputProps {
  style?: ViewStyle | object | Array<ViewStyle>;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  backgroundColor?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  theme?: Theme;
  fontSize?: string | number;
  borderRadius?: string;
  inverse?: boolean;
  borderColor?: string;
  label?: string;
  labelColor?: string;
  icon?: string;
  onPressIcon?: () => void;
}

interface State extends TextInputProps {
  onFocus?: () => void;
  hasFocus?: boolean;
  changeIcon?: boolean;
}
class TextInput extends Component<IProps, State>{

  constructor(props: IProps) {
    super(props);
    this.state = {
      hasFocus: false,
      changeIcon: true,
    };
  }

  onFocus = () => {
    this.setState({
      hasFocus: true
    })
  }

  onBlur = () => {
    this.setState({
      hasFocus: false
    })
  }

  onPressIcon = () => {    
    this.setState({
      changeIcon: !this.state.changeIcon
    })
    this.props.onPressIcon && this.props.onPressIcon();
  }

  render() {
    return (
      <View>
        {
          this.props.label && <StyledLabel color={this.props.labelColor}>{this.props.label}</StyledLabel>
        }
        <StyledInputWrapper {...this.props} hasFocus={this.state.hasFocus}>
          <StyledTextInput {...this.props} onFocus={this.onFocus} onBlur={this.onBlur} secureTextEntry={this.state.changeIcon ? true : false} />
          {this.props.icon && (
            <StyledIconWrapper onPress={this.onPressIcon} >
              <Icon name={this.props.icon} type="FontAwesome" color="#fff" size={24} />
            </StyledIconWrapper>
          )}
        </StyledInputWrapper>
      </View>
    )
  }
};

export default TextInput;
