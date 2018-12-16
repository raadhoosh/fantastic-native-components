import React, { Component } from "react";
import { TouchableOpacity, View, AccessibilityProps } from "react-native";
import { Icon, Text, Image } from "../../components";
import { StyledListItem ,StyledImage, StyledText} from "./List.style";
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
  borderRadius?: string;
  text?: string;  
  id?: number;
  source?: string;
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
        <StyledImage source={this.props.source} />  

        <StyledText>
          {this.props.text}
        </StyledText>

        <Icon name="chevron-right" type="FontAwesome" size={12} color="#ddd" />
      </StyledListItem>
    );
  }
}

export default ListItem;
