import styled from "styled-components";
import { View, TouchableOpacity, Text } from "react-native";
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
    color?: string;
    textColor?: string;
    width?: string;
    height?: string;
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    checked?: boolean;
}

function getColor(props: IProps) {

    let ForeColor = props.theme && props.theme.button.color ? props.theme.button.color : "#6c757d";

    if (props.color) {
        ForeColor = props.color;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string" && props.theme) {
            ForeColor = props.theme[color].main;
        }

    }

    return ForeColor;
}

const ForeColor = (props: IProps) => getColor(props);

const StyledWrapper = styled(TouchableOpacity)`      
   flex: 1;
   flex-direction: row;
   align-items: center;   
`;

const StyledRadio = styled(View)`      
    border: 2px solid ${(props: IProps) => props.checked ? ForeColor : "#ddd"};        
    width: ${(props: IProps) => props.width ? props.width : '20px'};       
    height: ${(props: IProps) => props.height ? props.height : '20px'};             
    border-radius: 500;     
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 5; 
    margin-right: 5;   
`;

const StyledText = styled(Text)`
   color: ${(props: IProps) => props.textColor ? props.textColor : "#333"};    
   flex: 1;
   align-items: center;
   justify-content: center;
   height: 100%;
` 

export { StyledWrapper, StyledRadio, StyledText };