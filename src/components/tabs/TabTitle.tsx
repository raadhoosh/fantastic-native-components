import * as React from "react";
import { StyledTabTitle, StyledTabTitleText } from "./Tabs.style";
import { ViewStyle } from "react-native";
import { Theme } from '..';

interface IProps {  
  style?: ViewStyle | object | Array<ViewStyle>;
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
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: string | number;
  borderRadius?: string;
  title?: string;
  active?: string;
  onTabChange :(index: number) => void;
  currentTab: number;
  index: number;
}

const TabTitle = (props: IProps) => {

  return (
    <StyledTabTitle {...props} activeOpacity={0.8} onPress={props.disabled ? undefined : () => props.onTabChange(props.index)} >
      <StyledTabTitleText style={props.style} {...props}>
        {props.title}
      </StyledTabTitleText>
    </StyledTabTitle>
  );
};

export default TabTitle;
