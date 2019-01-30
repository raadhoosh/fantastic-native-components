import styled from "styled-components";
import { TextInput, TextInputProps, Text, View, TouchableOpacity } from "react-native";
import { Theme } from '..';

interface IProps extends TextInputProps {
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
    fontSize?: string | number;
    borderRadius?: string;
    borderColor?: string;
    labelColor?: string;
    hasFocus?: boolean;
}

function getColor(props: IProps) {

    let TextInputColor = "#000";
    const color =
        (props.primary && "primary")
        || (props.secondary && "secondary")
        || (props.success && "success")
        || (props.info && "info")
        || (props.warning && "warning")
        || (props.danger && "danger");

    if (typeof (color) === "string" && props.theme) {
        TextInputColor = props.theme[color].main;
    }

    return TextInputColor;
}

const color = (props: IProps) => getColor(props);

const StyledInputWrapper = styled(View)`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? color : "#fff")};  
   border: 1px solid ${(props: IProps) => props.borderColor ? (props.hasFocus ? "#d4a411" : props.borderColor) : (props.hasFocus ? "#d4a411" : color)}; 
   width: ${(props: IProps) => props.width ? props.width : 'auto'};  
   height: ${(props: IProps) => props.height ? props.height : 'auto'};  
   border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'}; 
   shadow-color: #000;
   shadow-offset: 0px 2px;
   shadow-opacity: 0.8;
   shadow-radius: 2;
   elevation:2;
`;

const StyledIconWrapper = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: transparent;
  padding-left: 5px;
  padding-right: 10px;  
`;

const StyledTextInput = styled(TextInput)`       
    color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff" : color)}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'}; 
    background-color: transparent;    
    padding-left: 10;
    padding-right: 10;   
    flex: 1;     
    height: 100%
`;

const StyledLabel = styled(Text)`
  color: ${(props: IProps) => props.labelColor ? props.labelColor : "#fff"}; 
  margin-bottom: 16px;
  font-size: 14px;
`;


export { StyledTextInput, StyledLabel, StyledInputWrapper, StyledIconWrapper };