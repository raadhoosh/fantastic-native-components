import styled from "styled-components";
import { View, TextInput } from "react-native";
import { Icon } from "../../components";
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
    borderRadius?: number;
}

function getColor(props: IProps) {

    let backgroundColor =  "#6c757d";
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

const StyledSearch = styled(View)`     
    flex: 1;  
    flex-direction : row; 
    align-items: center;
    background-color: ${(props: IProps) => props.inverse ? ForeColor : backgroundColor};    
    border: 1px solid ${(props: IProps) => backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width : 'auto'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'};  
    padding-left: 10px;
    padding-right: 10px; 
    overflow: hidden;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 3;
`;

const StyledTextInput = styled(TextInput)`      
    color: ${(props: IProps) => props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'}; 
    background-color: ${(props: IProps) => props.inverse ? ForeColor : backgroundColor};
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'}; 
    flex: 1;     
`;

const StyledIcon = styled(Icon)`      
    color: ${(props: IProps) => props.inverse ? backgroundColor : "#fff"}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '18'};        
`;

export { StyledSearch, StyledTextInput, StyledIcon };