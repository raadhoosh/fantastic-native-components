import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import { any } from "prop-types";

function getColor(props: any) {
    let bgC = "#6c757d";
    let forC = "#fff";
    if (props.bgColor) {
        bgC = props.bgColor;
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
    // const btnColor = { bgC: bgC, forC: forC };
    // return btnColor;
}

// const arrayColor = getColor((props: any) => getColor(props));

const ButtonWrapper = styled(TouchableOpacity)`    
    background-color: ${(props: any) => props.theme.secondary.main}; 
    background-color: ${(props: any) => props.inverse ? '#fff' : getColor(props)};
    border: 1px solid ${(props) => getColor(props)};        
    width: ${(props: any) => props.width ? props.width : "auto"};    
    border-radius: 3px;
    margin-bottom: 5px;
    padding: 5px 10px;
`;

const ButtonText = styled(Text)`    
    text-align: center;
    color: ${(props: any) => props.inverse ? getColor(props) : "#fff"};    
`;

export { ButtonWrapper, ButtonText };