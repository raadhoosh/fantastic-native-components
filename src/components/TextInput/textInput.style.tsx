import styled from "styled-components";
import { TextInput as RnTextInput } from "react-native";
import { Theme } from '..';

interface IProps {
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    dark?: boolean;
    inverse?: boolean;
    bgColor?: string;
    color?: string;
    width?: string;
    margin?: string;
    theme?: Theme;
    fontSize?: string | number;
    borderRadius?: string;
}

function getColor(props: IProps) {

    let TextInputColor = props.theme && props.theme.button.color ? props.theme.button.color : "#000";
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

const TextInput = styled(RnTextInput)`    
    text-align: center;   
    color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff": color)}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : '14px')}; 
    background-color: ${(props: IProps) => props.inverse ? color : "#fff"};    
    border: 1px solid ${(props: IProps) => color};        
    width: ${(props: IProps) => props.width ? props.width :
        (props.theme && props.theme.button.width ? props.theme.button.width : 'auto')};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius :
        (props.theme && props.theme.button.borderRadius ? props.theme.button.borderRadius : '0')}; 
    margin-bottom: 5px;   
    padding: ${(props: IProps) => (props.theme && props.theme.button.padding) ? props.theme.button.padding : '5px 10px'};    
`;

export default TextInput;