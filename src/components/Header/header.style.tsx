import styled from "styled-components";
import { View as RnView } from "react-native";
type Props = {
    color: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
    theme?: any;
};

const Header = styled(RnView)`
height:  ${(props: Props) => props.theme.isIphoneX ? 45 : 55};
padding-left: 6px;
padding-right: 6px;
flex-direction: row;
background-color:  ${(props: Props) => {
        const { color } = props;
        return props.theme[color].main;
    }};
`;

export default Header;
