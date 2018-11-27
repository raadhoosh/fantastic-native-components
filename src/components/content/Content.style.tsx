import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const View = styled(KeyboardAwareScrollView)`
        flex: 1;
        height: 100%;
        background-color: ${(props: any) => props.color ? props.color : "#fff"};
        padding-left: ${(props: any) => props.full ? 0 : 6};
        padding-right: ${(props: any) => props.full ? 0 : 6};
`;

export default View;