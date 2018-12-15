import styled from "styled-components";
import { View, Text } from "react-native";
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
    BorderColor?: string;
    color?: string;
    width?: string | number;    
    height?: string | number;    
    theme?: Theme;    
    fontSize?: string | number;
    borderRadius?: number;
}

function getColor(props: IProps) {

    let backgroundColor =  "#6c757d";
    let ForeColor =  "#fff";
    let BorderColor =  "#6c757d";
    
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
            BorderColor = props.theme[color].main;
        }

    }

    const btnColor = { backgroundColor: backgroundColor, ForeColor: ForeColor, BorderColor: BorderColor };
    return btnColor;
}

const backgroundColor = (props: IProps) => getColor(props).backgroundColor;
const BorderColor = (props: IProps) => getColor(props).BorderColor;
const ForeColor = (props: IProps) => getColor(props).ForeColor;

const BadgeWrapper = styled(View)`      
    background-color: ${(props: IProps) =>  props.inverse ? ForeColor : backgroundColor};    
    border: 1px solid ${(props: IProps) => props.BorderColor ? props.BorderColor : BorderColor};        
    width: ${(props: IProps) => props.width ? props.width : 'auto'};  
    height: ${(props: IProps) => props.height ? props.height : 'auto'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius :'50'};     
    padding-bottom: 2;
    padding-left: 10;
    padding-right: 10; 
    margin-bottom: 5px;  
    flex: 1;
    align-items: center;    
`;

const BadgeText = styled(Text)`    
    flex: 1;
    align-items: center;
    justify-content: center;   
    color: ${(props: IProps) =>  props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :'12px'}; 
    height: 100%;    
`;

export { BadgeWrapper, BadgeText };