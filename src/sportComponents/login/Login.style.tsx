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
    width?: number | string;
    height?: number | string;
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    borderRadius?: string;
    checked?: boolean;
}

function getColor(props: IProps) {

    let backgroundColor = "#000";
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

    const color = { backgroundColor: backgroundColor, ForeColor: ForeColor };
    return color;
}

const ForeColor = (props: IProps) => getColor(props).ForeColor;

const StyledLogin = styled(View)`  
   background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : "#000"};      
   padding : 30px;
`;

const StyledTitle = styled(Text)`      
   background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : "#000"};  
   color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff" : ForeColor)}; 
   font-size: 32px;
   text-align: center;  
`;

const StyledMessage = styled(View)`  
   background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : "#000"};      
   display: flex;
   flex-direction: row;
   justify-content: center;   
   margin-top: 24px;
`;

export { StyledLogin, StyledTitle , StyledMessage};