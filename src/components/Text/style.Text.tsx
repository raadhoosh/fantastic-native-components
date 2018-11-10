import styled from "styled-components";
import { Text as RnText } from "react-native";
const Text = styled(RnText)`
color: ${(props: any) => props.theme.primary.main};
`;

export default Text;