import styled from "styled-components";
import { Text as RnText } from "react-native";
import { Theme } from '..';
enum FontWeight {
    normal = "normal",
    bold = "bold",
    hundred = "100",
    twoHundred = "200",
    threeHundred = "300",
    fourHundred = "400",
    fiveHundred = "500",
    sixHundred = "600",
    sevenHundred = "700",
    eightHundred = "800",
    nineHundred = "900",
}
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
    fontWeight?: FontWeight | string | number;
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
font-weight:${(props: IProps) => props.fontWeight ? props.fontWeight : FontWeight.nineHundred}; 
`;

export default Text;