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
    fontSize: number
    theme: Theme;
}

function getColor(props: IProps) {

    let ForeColor = "#fff";
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

        if (typeof (color) === "string") {
            ForeColor = props.theme[color].main;
        }

    }

    return ForeColor;
}

const ForeColor = (props: IProps) => getColor(props);

const Text = styled(RnText)`
color: ${ForeColor};
font-size:${(props: IProps) => props.fontSize ? props.fontSize : "14px"}; 
`;

export default Text;