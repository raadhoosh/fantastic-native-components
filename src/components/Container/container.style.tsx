import styled from "styled-components";
import { View as RnView } from "react-native";
const View = styled(RnView)`
flex: 1;
padding-top: ${(props: any) => props.theme.isIphoneX ? 20 : 0};
`;

export default View;