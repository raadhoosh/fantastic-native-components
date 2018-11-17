import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";

function getColor(props: any) {

    let bgColor = "#6c757d";
    let ForeColor = "#fff";
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

        if (typeof (color) === "string") {
            bgColor = props.theme[color].main;
            ForeColor = props.theme[color].contrastText;
        }

    }

    const btnColor = { bgColor: bgColor, ForeColor: ForeColor };
    return btnColor;
}

const btnColor = (props: any) => getColor(props).bgColor;

const ButtonWrapper = styled(TouchableOpacity)`      
    background-color: ${(props: any) => props.inverse ? '#fff' : btnColor};    
    border: 1px solid ${btnColor};        
    width: ${(props: any) => props.width ? props.width : "auto"};    
    border-radius: 3px;
    margin-bottom: 5px;
    padding: 5px 10px;
`;

const ButtonText = styled(Text)`    
    text-align: center;   
    color: ${(props: any) => props.inverse ? btnColor : "#fff"}; 
`;

export { ButtonWrapper, ButtonText };