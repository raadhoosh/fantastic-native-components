import * as React from "react";
import { StyledTitle, StyledText, StyledWrapper } from "./Menu.style";
import { Theme } from "..";
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
  title?: string;
}

const MenuItem = (props: IProps) => {
  return (
    <StyledWrapper>
      <StyledTitle {...props}>{props.title}</StyledTitle>
      <Icon type="FontAwesome" name="angle-right" color={"#fff"} size={20} />
    </StyledWrapper>
  );
};

export default MenuItem;
