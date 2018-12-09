import React, { Component } from "react";
import { Icon } from "../../components";
import { StyledRadio, StyledWrapper, StyledText } from "./Radio.style";
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
  color?: string;
  textColor?: string;
  width?: string;
  theme?: Theme;
  onChange?: () => void;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: number;
  borderRadius?: string;
  label?: string;  
  checked?: boolean;
}

class Radio extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <StyledWrapper
        onPress={this.props.disabled ? undefined : this.props.onChange}
      >
        <StyledRadio {...this.props}>
          {this.props.checked && (
            <Icon {...this.props} name="circle" type="FontAwesome" size={11} />
          )}
        </StyledRadio>
        <StyledText {...this.props}>
          {this.props.label}
        </StyledText>
      </StyledWrapper>
    );
  }
}

export default Radio;
