import styled from "styled-components";
import { View } from "react-native";
const StyledView = styled(View)`
flex: 1;
padding-top: ${(props: any) => props.theme.isIphoneX ? 0 : 0};
`;

export default StyledView;