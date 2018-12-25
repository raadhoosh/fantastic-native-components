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
    borderRadius?: string;
}

function getColor(props: IProps) {

    let bgColor: string = "#fff";
    let fColor: string = "#000";

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

const StyledCard = styled(TouchableOpacity)`
    background-color: ${backgroundColor};
    border: 1px solid ${backgroundColor};
    width: ${(props: IProps) => props.width ? props.width :
        (props.theme && props.theme.button.width ? props.theme.button.width : "auto")};
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius :
        (props.theme && props.theme.button.borderRadius ? props.theme.button.borderRadius : "0")};
    margin-bottom: 5px;
    padding: ${(props: IProps) => (props.theme && props.theme.button.padding) ? props.theme.button.padding : "5px 10px"};
    box-shadow: 10px 5px 5px #000;
`;

const StyledCardImages = styled(TouchableOpacity)`
    border: 1px solid  ${(props: IProps) => props.borderColor ? props.borderColor : "#ddd"};
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : "0"};
    flex: 1;
    box-shadow: 10px 5px 5px #000;
`;

const StyledImage = styled(Image)`
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : "0"};
    width: ${(props: IProps) => props.imageWidth ? props.imageWidth : "100%"};
    height: ${(props: IProps) => props.imageHeight ? props.imageHeight : "150px"};
`;

const StyledCardImagesFooter = styled(View)`
    width: ${(props: IProps) => props.imageWidth ? props.imageWidth : "100%"};
    background-color: ${backgroundColor};
    color: ${ForeColor};
    padding: 12px;
`;

const StyledCardImagesTitle = styled(Text)`
    text-align: ${(props: IProps) => props.center ? "center" : "left"};
    color: ${(props: IProps) => props.titleColor ? props.titleColor : ForeColor};
    font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.button.fontSize ? props.theme.button.fontSize : "14px")};
`;

const StyledCardImagesText = styled(Text)`
    text-align: ${(props: IProps) => props.center ? "center" : "left"};
    color: ${(props: IProps) => props.color ? props.color : ForeColor};
    padding-top:10;
`;

export { StyledCard, StyledCardImages, StyledCardImagesTitle, StyledImage, StyledCardImagesText, StyledCardImagesFooter };