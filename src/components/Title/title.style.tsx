import styled from "styled-components";
import { View, Text } from "react-native";
const StTitle = styled(View)`
    background-color: transparent;
    justify-content: center;
    align-items: ${(props: any) => (props.center ? "center" : "flex-start")};
    flex: 1;
`;
const StText = styled(Text)`
    font-size: 22;
    color: #fff;
`;
export { StText };
export default StTitle;