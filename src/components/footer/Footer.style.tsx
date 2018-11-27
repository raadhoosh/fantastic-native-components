import styled from "styled-components";
import { View } from "react-native";
const StyledFooter = styled(View)`
width: 100%;
height:  ${(props: any) => props.theme.isIphoneX ? 65 : 55};
justify-content: center;
align-items: center;
background-color:  ${(props: any) => {
        const { primary, secondary, success, info, warning, danger, light, dark } = props;
        const color = (primary && "primary") ||
            (secondary && "secondary") ||
            (success && "success") ||
            (info && "info") ||
            (warning && "warning") ||
            (danger && "danger") ||
            (light && "light") ||
            (dark && "dark") ||
            "primary";

        return props.theme[color].main;
    }};
`;

export default StyledFooter;
