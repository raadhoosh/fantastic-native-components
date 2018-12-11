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
    color?: string;
    width?: string;    
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    borderRadius?: string;
}

function getColor(props: IProps) {

    let backgroundColor =  "#6c757d";
    let ForeColor =  "#fff";
    
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

const BadgeWrapper = styled(View)`      
    background-color: ${(props: IProps) =>  props.inverse ? ForeColor : backgroundColor};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width : 'auto'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius :'50'}; 
    /* padding-top: 2;
    padding-bottom: 2; */
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
`;

export { BadgeWrapper, BadgeText };