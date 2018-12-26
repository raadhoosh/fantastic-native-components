import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
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
    width?: number;
    height?: number;
    theme?: Theme;
    disabled?: boolean;
    fontSize?: number;
    borderRadius?: string;
    iconColor?: string;
    iconSize?: number;
    label?: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

function getColor(props: IProps) {

    let backgroundColor = "#6c757d";
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

const FABWrapper = styled(TouchableOpacity)`  
    flex: 1;
    flex-direction: row;   
    justify-content: center;
    align-items: center;
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width : props.label ? "150" : '50'};  
    height: ${(props: IProps) => props.height ? props.height : props.label ? "30" : '50'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : props.label ? "50" : '50'};
    padding-left: 10;
    padding-right: 10;    
    padding-top: 5;
    padding-bottom: 5; 
    position: absolute;
    top:${(props: IProps) => props.top ? props.top : (props.bottom ? "auto" : '10')};
    bottom:${(props: IProps) => props.bottom ? props.bottom : (props.top ? "auto" : '10')}; 
    left:${(props: IProps) => props.left ? props.left : (props.right ? "auto" : '10')};
    right:${(props: IProps) => props.right ? props.right : (props.left ? "auto" : '10')};  
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 10; 
`;

const FABText = styled(Text)`    
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '15px'}; 
    padding-left: 10px;   
`;

const StyledIcon = styled(Icon)`     
    color: ${(props: IProps) => props.iconColor ? props.iconColor : (props.disabled ? "#ddd" : props.inverse ? backgroundColor : ForeColor)};
    font-size:${(props: IProps) => props.iconSize ? props.iconSize : '14px'}; 
   `;

export { FABWrapper, FABText, StyledIcon };