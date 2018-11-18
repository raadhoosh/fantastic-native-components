import styled from "styled-components";
import { Text as RnText } from "react-native";
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
    bgColor?: string;
    color?: string;
    margin?: string;
    fontSize?: number
    theme?: Theme;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    textAlign?: "auto" | "left" | "right" | "center" | "justify",
}

function getColor(props: IProps) {

    let ForeColor = props.theme && props.theme.text.color ? props.theme.text.color : "#000";
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

const Text = styled(RnText)`
color: ${ForeColor};
font-size:${(props: IProps) => props.fontSize ? props.fontSize : "14px"}; 
font-weight:${(props: IProps) => props.fontWeight ? props.fontWeight :
        (props.theme && props.theme.text.fontWeight ? props.theme.text.fontWeight : 'normal')}; 
text-align:${(props: IProps) => props.textAlign ? props.textAlign :
        (props.theme && props.theme.text.textAlign ? props.theme.text.textAlign : 'auto')}; 
width: auto       
`;

export default Text;