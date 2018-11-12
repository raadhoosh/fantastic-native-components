import styled from "styled-components";
import { Text as RnText } from "react-native";

function getColor(props: any) {
    let ForeC = "#000";
    if (props.color) {
        ForeC = props.color;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string") { ForeC = props.theme[color].main; }
    }

    return ForeC;
}

const Text = styled(RnText)`
color: ${(props) => getColor(props)};
`;

export default Text;