import styled from "styled-components";
import { TouchableOpacity, Text, View } from "react-native";
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
    inverse?: boolean;
    active?: string;
    backgroundColor?: string;
    backgroundColorLight?: string;
    borderActive?: string;
    color?: string;
    width?: string;
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    borderRadius?: string;
}

function getColor(props: IProps) {

    let backGroundColor: string = "#6c757d";
    let backGroundColorLight: string = "#6c757d";
    let foreColor: string = "#fff";
    let bActive: string = "#ccc";

    if (props.color) {
        foreColor = props.color;
    }
    if (props.backgroundColor) {
        backGroundColor = props.backgroundColor;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string" && props.theme) {
            backGroundColor = props.theme[color].main;
            foreColor = props.theme[color].contrastText;
            bActive = props.theme[color].dark;
            backGroundColorLight = props.theme[color].light;
        }

    }

    const btnColor = {
        backgroundColor: backGroundColor,
        ForeColor: foreColor,
        borderActive: bActive,
        backgroundColorLight: backGroundColorLight,
    };
    return btnColor;
}

const backgroundColor = (props: IProps) => getColor(props).backgroundColor;
const ForeColor = (props: IProps) => getColor(props).ForeColor;
const borderActive = (props: IProps) => getColor(props).borderActive;
const backgroundColorLight = (props: IProps) => getColor(props).backgroundColorLight;

const StyledTabTitle = styled(TouchableOpacity)`
    text-align: center;
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor};
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : "14px"};
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};
`;

const StyledTabHeading = styled(View)`
    flex: 1;
    flex-direction: row;
`;

const StyledTabTitleText = styled(Text)`
    text-align: center;
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? (props.active === "true" ? borderActive : backgroundColor) : ForeColor};
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : "16px"};
    padding: 10px;
    background-color: ${(props: IProps) => {
        return props.disabled ? "#ddd" : (props.inverse ? ForeColor : (props.active === "true" ? backgroundColorLight : backgroundColor));
    }};
    border-bottom-width:  2;
    border-bottom-color:  ${(props: IProps) => props.active === "true" ? borderActive : backgroundColor};
`;

const StyledTabs = styled(View)`
    border-width:  1;
    border-color:  transparent;
`;

const TabContent = styled(Text)`
    background-color: #fff;
    padding: 10px;
`;

export { StyledTabTitle, StyledTabTitleText, StyledTabHeading, StyledTabs, TabContent };