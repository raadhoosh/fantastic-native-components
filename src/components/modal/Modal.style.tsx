import styled from "styled-components";
import { ViewProps, View, Text } from "react-native";
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
    width?: string;
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

const StyledModalContent = styled(View)`    
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : "rgba(0, 0, 0, 0.41)"};       
    flex: 1;
    align-items: center;
    padding-top: 20;
    width: 100%;
    padding:30px 10px;    
`;

const StyledHeader = styled(View)`   
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? "#fff" : color)};         
    padding: ${(props: IProps) => (props.theme && props.theme.textInput.padding) ? props.theme.textInput.padding : '50px 10px'};
    display: flex;
    flex-direction: row;          
`;

const StyledHeaderText = styled(Text)`    
    color: ${(props: IProps) => props.color ? props.color : (props.inverse ? color : "#fff")}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.textInput.fontSize ? props.theme.textInput.fontSize : '14px')};    
    width: 95%;                         
`;

const StyledBody = styled(View)` 
    display:flex;   
    text-align: center;   
    color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff" : color)}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.textInput.fontSize ? props.theme.textInput.fontSize : '14px')}; 
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? color : "#fff")};         
    width: ${(props: IProps) => props.width ? props.width :
        (props.theme && props.theme.textInput.width ? props.theme.textInput.width : 'auto')};    
    padding: ${(props: IProps) => (props.theme && props.theme.textInput.padding) ? props.theme.textInput.padding : '5px 10px'};     
`;

const StyledFooter = styled(View)`    
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? color : "#fff")};    
    padding: ${(props: IProps) => (props.theme && props.theme.textInput.padding) ? props.theme.textInput.padding : '10px'};
    border-top-width: 1;
    border-top-color: ${(props: IProps) => props.color ? props.color : (props.inverse ? "#fff" : color)};  
    border-style: dotted;       
`;

export { StyledHeader, StyledModalContent, StyledBody, StyledFooter, StyledHeaderText };