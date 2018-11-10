import styled from "styled-components";
import { View as ReView } from "react-native";
const View = styled(ReView)`
flex: 1,
padding-top: ${(props: any) => props.theme.isIphoneX ? 20 : 0};
`;

export default View;