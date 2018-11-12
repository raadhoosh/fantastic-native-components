import * as React from "react";
import StText from "./text.style";

interface IProps {
  /** This is a primary Text it out!. */
  primary?: boolean;
  /** This is a secondary Text it out!. */
  secondary?: boolean;
  /** This is a success Text it out!. */
  success?: boolean;
  /** This is a info Text it out!. */
  info?: boolean;
  /** This is a warning Text it out!. */
  warning?: boolean;
  /** This is a danger Text it out!. */
  danger?: boolean;
  /** This is a light Text it out!. */
  light?: boolean;
  /** This is a dark Text it out!. */
  dark?: boolean;
  /** This is a text color Text it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const Text = (props: IProps) => {

  return (
    <StText {...props}> {props.children} </StText>
  );
};

export default Text;
