import styled from "styled-components";
import { TouchableOpacity, Text, Image, View } from "react-native";
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
    imageWidth?: number | string;
    imageHeight?: number | string;
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

const StyledCard = styled(TouchableOpacity)`      
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width :
        (props.theme && props.theme.button.width ? props.theme.button.width : 'auto')};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius :
        (props.theme && props.theme.button.borderRadius ? props.theme.button.borderRadius : '0')}; 
    margin-bottom: 5px;   
    padding: ${(props: IProps) => (props.theme && props.theme.button.padding) ? props.theme.button.padding : '5px 10px'}; 
    box-shadow: 10px 5px 5px #000;   
`;

const ButtonText = styled(Text)`    
    text-align: center;   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : '14px')}; 
`;

const StyledCardImages = styled(TouchableOpacity)`      
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width : 'auto'};  
    height: ${(props: IProps) => props.height ? props.height : 'auto'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'};    
    box-shadow: 0 0 5px 5px #000;    
    flex: 1;    
    align-items: center;
    overflow: hidden;
`;

const StyledCardImagesFooter = styled(View)`              
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};        
`;

const StyledImage = styled(Image)`              
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'}; 
    width: ${(props: IProps) => props.imageWidth ? props.imageWidth : '100%'};       
    height: ${(props: IProps) => props.imageHeight ? props.imageHeight : '150px'};       
`;

const StyledCardImagesTitle = styled(Text)`    
    text-align: center;   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : '14px')}; 
`;

const StyledCardImagesText = styled(Text)`    
    text-align: center;   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : '14px')}; 
    padding: 12px;    
`;

export { StyledCard, ButtonText, StyledCardImages, StyledCardImagesTitle, StyledImage, StyledCardImagesText , StyledCardImagesFooter};