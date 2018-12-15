import React, { Component } from "react";
import { TouchableOpacity, View, AccessibilityProps } from "react-native";
import { Icon, Text, Image } from "../../components";
import { StyledList } from "./List.style";
import { Theme } from "..";
import ListItem from "./ListItem"

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
  dataSource: Array<Object>;
  source: string;
}

class List extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <StyledList>
        {
          this.props.dataSource.map((item, index) => (
            <ListItem
              source={item.source}
            />            
          ))
        }
      </StyledList>
    );
  }
}

export default List;
