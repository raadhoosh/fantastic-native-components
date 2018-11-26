import styled from "styled-components";
import { View, Text } from "react-native";
const StyledTitle = styled(View)`
    background-color: transparent;
    justify-content: center;
    align-items: ${(props: any) => (props.center ? "center" : "flex-start")};
    flex: 1;
`;
const StyledText = styled(Text)`
    font-size: 22;
    color: #fff;
`;

export { StyledText,StyledTitle };
