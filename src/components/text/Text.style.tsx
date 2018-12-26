import styled from "styled-components";
import { Text, TextStyle } from "react-native";
import { Theme } from '..';

interface IProps extends TextStyle {
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    dark?: boolean;
    theme?: Theme;
}

function getColor(props: IProps) {

    let ForeColor = "#000";
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

const StyledText = styled(Text)`
color: ${ForeColor}; 
font-weight:${(props: IProps) => props.fontWeight ? props.fontWeight : 'normal'}; 
text-align:${(props: IProps) => props.textAlign ? props.textAlign : 'auto'}; 
font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'};         
width: auto       
`;

export default StyledText;