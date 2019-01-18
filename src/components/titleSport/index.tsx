import * as React from "react";
import { StyledTitle, StyledText, StyledWrapper } from "./Title.style";
import { Theme } from "..";
import { TextStyle, TextProps, View, Text } from "react-native";
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

const TitleSport = (props: IProps) => {
  return (
    <StyledWrapper>
      <StyledTitle {...props}>{props.title}</StyledTitle>

      <StyledText>VIEW ALL</StyledText>

      <Icon type="FontAwesome" name="angle-right" color={"#888a8c"} size={20} />
    </StyledWrapper>
  );
};

export default TitleSport;
