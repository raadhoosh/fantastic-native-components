import styled from "styled-components";
import { View } from "react-native";
type Props = {
    color: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
    theme?: any;
};

const StyledHeader = styled(View)`
height:  ${(props: Props) => props.theme.isIphoneX ? 65 : 55};
padding-left: 6px;
padding-right: 6px;
flex-direction: row;
background-color:  ${(props: Props) => {
        return props.theme[props.color].main;
    }};
`;

export default StyledHeader;
