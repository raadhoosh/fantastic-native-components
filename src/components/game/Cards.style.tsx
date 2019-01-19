import styled from "styled-components";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { Theme } from "..";

interface IProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  center?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  titleColor?: string;
  width?: number | string;
  height?: number | string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  theme?: Theme;
  fontSize?: string | number;
  borderRadius?: number;
}

function getColor(props: IProps) {
  let bgColor: string = "#000";
  let fColor: string = "#fff";

  if (props.backgroundColor) {
    bgColor = props.backgroundColor;
  } else {
    const color =
      (props.primary && "primary") ||
      (props.secondary && "secondary") ||
      (props.success && "success") ||
      (props.info && "info") ||
      (props.warning && "warning") ||
      (props.danger && "danger");

    if (typeof color === "string" && props.theme) {
      bgColor = props.theme[color].main;
      fColor = props.theme[color].contrastText;
    }
  }

  const CardColor = { backgroundColor: bgColor, ForeColor: fColor };
  return CardColor;
}

const backgroundColor = (props: IProps) => getColor(props).backgroundColor;
const ForeColor = (props: IProps) => getColor(props).ForeColor;

const StyledGame = styled(TouchableOpacity)`
  width: ${(props: IProps) => (props.width ? props.width : "315px")};
  height: ${(props: IProps) => (props.height ? props.height : "auto")};  
  padding-top: 30px; 
  margin-right: 5px;
  background-color: ${backgroundColor};   
`;

const StyledGameImgWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #171818;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px; 
  padding-bottom: 20px;
`;

const StyledImage = styled(Image)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "60px")};
  height: ${(props: IProps) =>
    props.imageHeight ? props.imageHeight : "60px"};
  margin-top: -15px;
`;

const StyledGameFooter = styled(View)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "100%")};
  background-color: ${backgroundColor};  
  padding: 6px;
  background: #2F3030;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;  
  text-transform: uppercase;  
  display: flex;
  align-items: center;  
  justify-content: center; 
  flex-direction: row;
`;

const StyledGameTitle = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};
  color: ${(props: IProps) =>
    props.titleColor ? props.titleColor : ForeColor};
  font-size: ${(props: IProps) => (props.fontSize ? props.fontSize : "24px")};  
  font-weight: normal;
`;

const StyledGameText = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};
  color: ${(props: IProps) => (props.color ? props.color : ForeColor)};
  padding-top: 10;
  font-size: ${(props: IProps) => (props.fontSize ? props.fontSize : "24px")}; 
  font-weight: normal;
`;

const StyledVSWrapper = styled(View)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "56px")};
  position: absolute;
  top: 17px;
  left: 130px;
  display: flex;
  align-items: center;  
  justify-content: center; 
`;

const StyledVS = styled(Text)` 
  color: ${(props: IProps) => (props.color ? props.color : ForeColor)};  
  font-size: 30px;  
`;

const StyledTextStart = styled(Text)` 
  color: ${(props: IProps) => (props.color ? props.color : ForeColor)};  
  font-size: 20px;
  padding-right: 5px;  
`;

const StledTeams = styled(View)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "50%")};
  display: flex;
  align-items: center;
  
`;

export {
  StyledGame,
  StyledGameTitle,
  StyledImage,
  StyledGameText,
  StyledGameFooter,
  StyledVS,
  StyledGameImgWrapper,
  StledTeams,
  StyledVSWrapper,
  StyledTextStart
};
