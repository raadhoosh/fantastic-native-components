import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
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
    backgroundColor?: string;
    color?: string;
    width?: number | string;
    height?: number | string;
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    borderRadius?: string;
}

function getColor(props: IProps) {

    let backgroundColor = "#6c757d";
    let ForeColor = "#fff";

    if (props.color) {
        ForeColor = props.color;
    }
    if (props.backgroundColor) {
        backgroundColor = props.backgroundColor;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string" && props.theme) {
            backgroundColor = props.theme[color].main;
            ForeColor = props.theme[color].contrastText;
        }

    }

    const btnColor = { backgroundColor: backgroundColor, ForeColor: ForeColor };
    return btnColor;
}

const backgroundColor = (props: IProps) => getColor(props).backgroundColor;
const ForeColor = (props: IProps) => getColor(props).ForeColor;

const ButtonWrapper = styled(TouchableOpacity)`      
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width : 'auto'}; 
    height: ${(props: IProps) => props.height ? props.height : 'auto'};   
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
    display: flex;
    align-items: center;  
    justify-content: center; 
`;

const ButtonText = styled(Text)`    
    text-align: center;   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'}; 
`;

export { ButtonWrapper, ButtonText };