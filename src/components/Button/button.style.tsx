import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import {Theme} from '..';

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
    theme: Theme;
}

function getColor(props: IProps) {

    let backgroundColor = "#6c757d";
    let ForeColor = "#fff";
    if (props.color) {
        ForeColor = props.color;
    }
     if (props.bgColor) {
        backgroundColor = props.bgColor;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string") {
            backgroundColor = props.theme[color].main;
            ForeColor = props.theme[color].contrastText;
        }

    }

    const btnColor = { bgColor: backgroundColor, ForeColor: ForeColor };
    return btnColor;
}

const bgColor = (props: IProps) => getColor(props).bgColor;
const ForeColor = (props: IProps) => getColor(props).ForeColor;

const ButtonWrapper = styled(TouchableOpacity)`      
    background-color: ${(props: IProps) => props.inverse ? ForeColor : bgColor};    
    border: 1px solid ${bgColor};        
    width: ${(props: IProps) => props.width ? props.width : "auto"};    
    border-radius: 3px;
    margin-bottom: 5px;
    padding: 5px 10px;
`;

const ButtonText = styled(Text)`    
    text-align: center;   
    color: ${(props: IProps) => props.inverse ? bgColor : ForeColor}; 
`;

export { ButtonWrapper, ButtonText };