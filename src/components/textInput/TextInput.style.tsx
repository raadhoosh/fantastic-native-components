import styled from "styled-components";
import { TextInput ,TextInputProps } from "react-native";
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
    width?: string;    
    theme?: Theme;
    fontSize?: string | number;
    borderRadius?: string;
    borderColor?: string;
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

const StyledTextInput = styled(TextInput)`       
    color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff": color)}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :'14px'}; 
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? color: "#fff")};       
    border: 1px solid ${(props: IProps) => props.borderColor ? props.borderColor : color};        
    width: ${(props: IProps) => props.width ? props.width : 'auto'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'}; 
    margin-bottom: 5px;   
    padding-top: 5;
    padding-bottom: 5;
    padding-left: 10;
    padding-right: 10;  
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation:2;
`;

export default StyledTextInput;