import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";
const StyledView = styled(View)`
    background-color: transparent;
    justify-content: center;
    align-items: flex-start;
    margin: auto 6px auto;
`;
const StyledTouchableOpacity = styled(TouchableOpacity)`
    padding-left: 12px;
    padding-top: 32px;
    padding-bottom: 16px;
    width: 100%;
`;

export { StyledView, StyledTouchableOpacity };