import * as React from "react";
import { StyledHeader, StyledHeaderText, StyledModalContent, StyledBody, StyledFooter } from "./Modal.style";
import { ViewStyle, ModalProps, View, Modal } from "react-native";
import { Icon, Button } from "../../components";
import { Theme } from '..';

interface IProps extends ModalProps {
  style?: ViewStyle | object | Array<ViewStyle>;
  children?: JSX.Element | JSX.Element[] | string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  hasClose?: boolean;
  backgroundColor?: string;
  color?: string;
  width?: string;
  theme?: Theme;
  fontSize?: string | number;
  borderRadius?: string;
  inverse?: boolean;
  borderColor?: string;
  iconColor?: string;
  title?: string;
  onPress?: () => void;
}

const StyledModal = (props: IProps) => {

  return (
    <Modal  {...props}>
      <StyledModalContent {...props}>
        <View style={{ width: props.width }}>
          <StyledHeader {...props}>
            <StyledHeaderText {...props}>
              {props.title}
            </StyledHeaderText>
            {
              props.hasClose && <Icon type="FontAwesome"
                name="close"
                color={props.iconColor}
                onPress={props.onPress}
              />
            }
          </StyledHeader >
          <StyledBody {...props}>
            {props.children}
          </StyledBody>
          <StyledFooter {...props}>
            <Button {...props}
              width="80px"
              onPress={props.onPress}
            >
              close
          </Button>
          </StyledFooter>
        </View>
      </StyledModalContent>
    </Modal>
  )

};

export default StyledModal;
