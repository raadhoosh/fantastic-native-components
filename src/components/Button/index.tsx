import * as React from "react";
import { ButtonText, ButtonWrapper } from "./button.style";
import { ViewStyle } from "react-native";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  style?: ViewStyle | object | Array<ViewStyle>;
  /** This is a primary Button it out!. */
  primary?: boolean;
  /** This is a secondary Button it out!. */
  secondary?: boolean;
  /** This is a success Button it out!. */
  success?: boolean;
  /** This is a info Button it out!. */
  info?: boolean;
  /** This is a warning Button it out!. */
  warning?: boolean;
  /** This is a danger Button it out!. */
  danger?: boolean;
  /** This is a light Button it out!. */
  light?: boolean;
  /** This is a dark Button it out!. */
  dark?: boolean;
  inverse?: boolean;
  /** Description of prop "primary". */
  backgroundColor?: string;
  text?: string;
  color?: string;
  width?: string;
  margin?: string;
  theme?: any;
}

const Button = (props: IProps) => {

  return (
    <ButtonWrapper {...props} >
      <ButtonText {...props}>
        {props.children}
      </ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
