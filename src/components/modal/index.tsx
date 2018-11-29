import * as React from "react";
import { StyledHeader, StyledHeaderText, StyledModal, StyledBody, StyledFooter } from "./Modal.style";
import { ViewStyle, ModalProps, Text, Modal } from "react-native";
import { Icon } from "../../components";
import { Theme } from '..';

interface IProps extends ModalProps {
  style?: ViewStyle | object | Array<ViewStyle>;
  children: JSX.Element | JSX.Element[] | string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  backgroundColor?: string;
  color?: string;
  width?: string;
  theme?: Theme;
  fontSize?: string | number;
  borderRadius?: string;
  inverse?: boolean;
  borderColor?: string;
}

const TextInput = (props: IProps) => {
  return (
    <Modal {...props}>
      <StyledModal {...props}>
        <StyledHeader {...props}>
          <StyledHeaderText>Hello World!</StyledHeaderText>
          <Icon type="FontAwesome" name="user-secret" />
        </StyledHeader >
        <StyledBody {...props}>
          <Text>Hello body!</Text>
          <Text>Hello body!</Text>
        </StyledBody>
        <StyledFooter {...props}>
          <Text>Hello footer!</Text>
        </StyledFooter>
      </StyledModal>
    </Modal>
  )

};

export default TextInput;
