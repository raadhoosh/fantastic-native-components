import * as React from "react";
import { StyledTitle, StyledWrapper } from "./Menu.style";
import { Theme } from "../../components";
import { TextStyle, TextProps } from "react-native";
import { Icon } from "../../components";

interface IProps extends TextStyle, TextProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  theme?: Theme;
  title: string;
}

const MenuItem = (props: IProps) => {
  return (
    <StyledWrapper theme={props.theme}>
      <StyledTitle theme {...props}>{props.title}</StyledTitle>
      <Icon type="FontAwesome" name="angle-right" color={"#fff"} size={20} />
    </StyledWrapper>
  );
};

export default MenuItem;
