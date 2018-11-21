import styled from "styled-components";
import { Text as RnText ,TextStyle} from "react-native";
import { Theme } from '..';

interface IProps extends TextStyle{
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
font-weight:${(props: IProps) => props.fontWeight ? props.fontWeight :
        (props.theme && props.theme.text.fontWeight ? props.theme.text.fontWeight : 'normal')}; 
text-align:${(props: IProps) => props.textAlign ? props.textAlign :
        (props.theme && props.theme.text.textAlign ? props.theme.text.textAlign : 'auto')}; 
font-size:${(props: IProps) => props.fontSize ? props.fontSize :
        (props.theme && props.theme.text.fontSize ? props.theme.text.fontSize : '14px')};         
width: auto       
`;

export default Text;