import styled from "styled-components";
import { TextInput as RnTextInput } from "react-native";

function getColor(props: any) {
    let bgC = "#6c757d";
    let forC = "#fff";
    if (props.backgroundColor) {
        bgC = props.backgroundColor;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string") {
            bgC = props.theme[color].main;
            forC = props.theme[color].contrastText;
        }
    }
    return bgC    
}

const TextInput = styled(RnTextInput)`    
    background-color: ${(props: any) => props.backgroundColor ? props.backgroundColor : '#fff'};    
    border: 1px solid ${(props) => getColor(props)};          
    width: ${(props: any) => props.width ? props.width : "auto"};    
    border-radius: 3px;
    margin-bottom: 5px;
    padding: 5px 10px;
`;

export default TextInput;