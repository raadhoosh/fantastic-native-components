import styled from "styled-components";
import { Text, TextStyle, View } from "react-native";
import { Theme } from "../../components";

interface IProps extends TextStyle {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  theme: Theme;
}

function getColor(props: IProps) {
  // tslint:disable-next-line:no-shadowed-variable
  let ForeColor = "#fff";
  if (props.color) {
    ForeColor = props.color;
  } else {
    const color =
      (props.primary && "primary") ||
      (props.secondary && "secondary") ||
      (props.success && "success") ||
      (props.info && "info") ||
      (props.warning && "warning") ||
      (props.danger && "danger");

    if (typeof color === "string" && props.theme) {
      ForeColor = props.theme[color].main;
    }
  }

  return ForeColor;
}

const ForeColor = (props: IProps) => getColor(props);

const StyledWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: IProps) => props.theme.primary.light};
`;

const StyledTitle = styled(Text)`
  color: ${ForeColor};
  font-weight: ${(props: IProps) =>
    props.fontWeight ? props.fontWeight : "normal"};
  text-align: ${(props: IProps) =>
    props.textAlign ? props.textAlign : "auto"};
  font-size: ${(props: IProps) => (props.fontSize ? props.fontSize : "20px")};
  width: auto;
  flex: 1;
  padding: 10px;
`;

const StyledText = styled(Text)`
  color: #acafb2;
  font-weight: ${(props: IProps) =>
    props.fontWeight ? props.fontWeight : "normal"};
  text-align: ${(props: IProps) =>
    props.textAlign ? props.textAlign : "auto"};
  font-size: ${(props: IProps) => (props.fontSize ? props.fontSize : "18px")};
  width: auto;
  padding-left: 12px;
  padding-right: 12px;
`;

export { StyledTitle, StyledText, StyledWrapper };
