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
    bgColor?: string;
    color?: string;
    width?: string;
    margin?: string;
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    borderRadius?: string;
}

function getColor(props: IProps) {

    let backgroundColor = props.theme && props.theme.button.backgroundColor ? props.theme.button.backgroundColor : "#6c757d";
    let ForeColor = props.theme && props.theme.button.color ? props.theme.button.color : "#fff";
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

        if (typeof (color) === "string" && props.theme) {
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
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : bgColor)};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : bgColor};        
    width: ${(props: IProps) => props.width ? props.width :
        (props.theme && props.theme.button.width ? props.theme.button.width : 'auto')};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius :
        (props.theme && props.theme.button.borderRadius ? props.theme.button.borderRadius : '0')}; 
    margin-bottom: 5px;   
    padding: ${(props: IProps) => (props.theme && props.theme.button.padding) ? props.theme.button.padding : '5px 10px'};    
`;

const ButtonText = styled(Text)`    
    text-align: center;   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? bgColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : '14px')}; 
`;

export { ButtonWrapper, ButtonText };