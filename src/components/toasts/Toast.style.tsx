import styled from "styled-components";
import { Text, Animated, Dimensions } from "react-native";
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
    fontSize?: string | number;
    borderRadius?: string;
    borderColor?: string;
}

function getColor(props: IProps) {

    let backgroundColor = props.theme && props.theme.button.backgroundColor ? props.theme.button.backgroundColor : "#6c757d";
    let ForeColor = props.theme && props.theme.button.color ? props.theme.button.color : "#fff";

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

const StyledToasts = styled(Animated.View)`      
    border: 1px solid ${(props: IProps) => props.borderColor ? props.borderColor : backgroundColor};       
    width: ${(props: IProps) => props.width ? props.width : '100%'};       
    height: ${(props: IProps) => props.height ? props.height : '70'};             
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'};   
    background-color: ${(props: IProps) =>  (props.inverse ? ForeColor : backgroundColor)};      
    position: absolute;
    left: 0;
    right: 0;
    top: 0;  
    padding: 10px;    
`;

const StyledToastsText = styled(Text)`       
    color: ${(props: IProps) => props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : '14px')}; 
`;

export { StyledToasts, StyledToastsText };