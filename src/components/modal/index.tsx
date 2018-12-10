import * as React from "react";
import { StyledHeader, StyledHeaderText, StyledModalContent, StyledBody, StyledFooter, StyledOverlay } from "./Modal.style";
import { ViewStyle, ModalProps, View, Modal, TouchableOpacity } from "react-native";
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
  width?: string | number;
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
      <StyledOverlay activeOpacity={0.95}  onPress={props.onPress}/>
      <StyledModalContent style={{ width: props.width }}>
          <StyledHeader {...props}>
            <StyledHeaderText {...props}>
              {props.title}
            </StyledHeaderText>
            <TouchableOpacity style={{width:32}}>
              {
                props.hasClose && <Icon type="FontAwesome"
                  name="close"
                  color={props.iconColor}
                  onPress={props.onPress}
                  fontSize={14}
                />
              }
            </TouchableOpacity>
          </StyledHeader >
          <StyledBody {...props}>
            {props.children}
          </StyledBody>
          <StyledFooter {...props}>
            <Button {...props}
              width="80px"
              onPress={props.onPress}
            >
              cancel
          </Button>
          </StyledFooter>
        </StyledModalContent>      
    </Modal>
  )

};

export default StyledModal;
