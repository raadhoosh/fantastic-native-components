import styled from "styled-components";
import { View, TextInput } from "react-native";
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

const StyledSearch = styled(View)`     
    flex: 1;  
    flex-direction : row; 
    align-items: center;
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width :'auto'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'};  
    padding-left: 10px;
    padding-right: 10px; 
    overflow: hidden;
`;

const StyledTextInput = styled(TextInput)`      
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : '14px')}; 
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'}; 
    flex: 1;     
`;

export { StyledSearch, StyledTextInput };