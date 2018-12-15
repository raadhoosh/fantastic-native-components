import React, { Component } from "react";
import { TouchableOpacity, View, AccessibilityProps } from "react-native";
import { Icon, Text, Image } from "../../components";
import { StyledListItem } from "./List.style";
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
  text?: string;
  checked?: boolean;
  id?: number;
  source: string;
}

class ListItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <StyledListItem
        onPress={this.props.onPress}
        key={this.props.id}        
      >
        <Image source={this.props.source} />
        <Icon name="check" type="FontAwesome" size={12} color="#fff" />
        <Text>
          {this.props.text}
        </Text>
      </StyledListItem>
    );
  }
}

export default ListItem;
