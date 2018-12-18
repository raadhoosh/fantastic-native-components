import styled from "styled-components";
import { ViewProps, View, Text, TouchableOpacity } from "react-native";
import { Theme } from "..";

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
    theme?: Theme;
}

function getColor(props: IProps) {

    let TextInputColor = props.theme && props.theme.button.color ? props.theme.button.color : "#000";
    const inColor = (props.primary && "primary")
        || (props.secondary && "secondary")
        || (props.success && "success")
        || (props.info && "info")
        || (props.warning && "warning")
        || (props.danger && "danger");

    if (typeof (inColor) === "string" && props.theme) {
        TextInputColor = props.theme[inColor].main;
    }

    return TextInputColor;
}

const color = (props: IProps) => getColor(props);

const StyledContent = styled(View)`
    flex: 1;
    padding-left: 8;
    padding-right: 8;
`;

const StyledHeader = styled(TouchableOpacity)`
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? "#fff" : color)};
    padding: 10px;
    display: flex;
    flex-direction: row;
`;

const StyledHeaderText = styled(Text)`
    color: #fff;
    font-size: 14px;
    width: 95%;
`;

const StyledBody = styled(View)`
    display:flex;
    text-align: center;
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? color : "#fff")};
    width: auto;
    padding-top: 5;
    padding-bottom: 5;
    padding-left: 10;
    padding-right: 10;
    border: 1px;
    border-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : (props.inverse ? "#fff" : color)};
`;

export { StyledHeader, StyledContent, StyledBody, StyledHeaderText };