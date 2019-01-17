import styled from "styled-components";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { Theme } from "..";

interface IProps {
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    dark?: boolean;
    center?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    titleColor?: string;
    width?: number | string;
    height?: number | string;
    imageWidth?: number | string;
    imageHeight?: number | string;
    theme?: Theme;
    fontSize?: string | number;
    borderRadius?: number;
}

function getColor(props: IProps) {

    let bgColor: string = "#000";
    let fColor: string = "#fff";

    if (props.backgroundColor) {
        bgColor = props.backgroundColor;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string" && props.theme) {
            bgColor = props.theme[color].main;
            fColor = props.theme[color].contrastText;
        }

    }

    const CardColor = { backgroundColor: bgColor, ForeColor: fColor };
    return CardColor;
}

const backgroundColor = (props: IProps) => getColor(props).backgroundColor;
const ForeColor = (props: IProps) => getColor(props).ForeColor;

const StyledGame = styled(TouchableOpacity)`
    border: 1px solid  ${(props: IProps) => props.borderColor ? props.borderColor : "#ddd"};
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : "5"};
    flex: 1;
    overflow: hidden;
    shadow-color: #ddd;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.1;
    shadow-radius: 2;
    elevation:5; 
`;

const StyledGameImgWrapper = styled(View)`    
    display: flex;
    flex-direction: row;
    background-color: ${backgroundColor};
    position: relative;
`;

const StyledImage = styled(Image)`    
    width: ${(props: IProps) => props.imageWidth ? props.imageWidth : "50px"};
    height: ${(props: IProps) => props.imageHeight ? props.imageHeight : "50px"};
`;

const StyledGameFooter = styled(View)`
    width: ${(props: IProps) => props.imageWidth ? props.imageWidth : "100%"};
    background-color: ${backgroundColor};
    color: ${ForeColor};
    padding: 12px;
`;

const StyledGameTitle = styled(Text)`
    text-align: ${(props: IProps) => props.center ? "center" : "left"};
    color: ${(props: IProps) => props.titleColor ? props.titleColor : ForeColor};
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : "14px"};
`;

const StyledGameText = styled(Text)`
    text-align: ${(props: IProps) => props.center ? "center" : "left"};
    color: ${(props: IProps) => props.color ? props.color : ForeColor};
    padding-top:10;
`;

const StyledVS = styled(Text)`
    text-align: ${(props: IProps) => props.center ? "center" : "left"};
    color: ${(props: IProps) => props.color ? props.color : ForeColor};
    padding-top:10;
`;

export { StyledGame, StyledGameTitle, StyledImage, StyledGameText, StyledGameFooter, StyledVS, StyledGameImgWrapper };