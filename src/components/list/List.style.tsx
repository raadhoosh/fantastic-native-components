import styled from "styled-components";
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Theme } from '..';

interface IProps extends TouchableOpacityProps {
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
    height?: number;
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    borderRadius?: string;
    checked?: boolean;
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

const StyledList = styled(TouchableOpacity)`      
    border: 2px solid ${(props: IProps) => props.checked ? backgroundColor : "#ddd"};        
    width: ${(props: IProps) => props.width ? props.width : '20px'};       
    height: ${(props: IProps) => props.height ? props.height : '20px'};             
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'};     
    justify-content: center;
    align-items: center;
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.checked ? backgroundColor : "#fff")};
    margin-bottom: 5px;    
`;

const StyledListItem = styled(TouchableOpacity)`      
    border: 2px solid ${(props: IProps) => props.checked ? backgroundColor : "#ddd"};        
    width: ${(props: IProps) => props.width ? props.width : '20px'};       
    height: ${(props: IProps) => props.height ? props.height : '20px'};             
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'};     
    justify-content: center;
    align-items: center;
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.checked ? backgroundColor : "#fff")};
    margin-bottom: 5px;    
`;

export { StyledListItem, StyledList };