import styled from "styled-components";
import { Text as ReText } from "react-native";
const Text = styled(ReText)`
color: ${(props: any) => props.theme.primary.main};
`;

export default Text;