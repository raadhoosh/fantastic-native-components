import styled from "styled-components";
import { ViewProps, View, Text,TouchableOpacity } from "react-native";
import { Theme } from '..';

interface IProps extends ViewProps {
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
    width?: string | number;
    theme?: Theme;
    fontSize?: string | number;
    borderRadius?: string;
    borderColor?: string;
}

function getColor(props: IProps) {

    let TextInputColor = props.theme && props.theme.button.color ? props.theme.button.color : "#000";
    const color =
        (props.primary && "primary")
        || (props.secondary && "secondary")
        || (props.success && "success")
        || (props.info && "info")
        || (props.warning && "warning")
        || (props.danger && "danger");

    if (typeof (color) === "string" && props.theme) {
        TextInputColor = props.theme[color].main;
    }

    return TextInputColor;
}

const color = (props: IProps) => getColor(props);

const StyledOverlay = styled(TouchableOpacity)`    
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : "rgba(0, 0, 0, 0.41)"};       
    flex: 1;
    align-items: center;    
    width: 100%;
    padding-top: 50;
    padding-bottom: 50;
    padding-left: 20;
    padding-right: 20;     
`;

const StyledModalContent = styled(View)`    
    position:absolute;
    top: 40; 
    left: 5%;
    max-width: 95%;
`;

const StyledHeader = styled(View)`   
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? "#fff" : color)};         
    padding: 10px;
    display: flex;
    flex-direction: row;          
`;

const StyledHeaderText = styled(Text)`    
    color: ${(props: IProps) => props.color ? props.color : (props.inverse ? color : "#fff")}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :  '14px'};            
    width: 95%;                         
`;

const StyledBody = styled(View)` 
    display:flex;   
    text-align: center;   
    color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff" : color)}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'};        
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? color : "#fff")};         
    width: ${(props: IProps) => props.width ? props.width : 'auto'};           
    padding-top: 5;
    padding-bottom: 5;
    padding-left: 10;
    padding-right: 10;     
`;

const StyledFooter = styled(View)`    
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? color : "#fff")};    
    padding: 10px;
    border-top-width: 1;
    border-top-color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff" : color)};  
    border-style: dotted;       
`;

export { StyledHeader, StyledModalContent, StyledBody, StyledFooter, StyledHeaderText, StyledOverlay };