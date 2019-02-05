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

const StyledCardImages = styled(TouchableOpacity)`
  border: 1px solid
    ${(props: IProps) => (props.borderColor ? props.borderColor : "#000")};
  width: ${(props: IProps) => (props.width ? props.width : "280px")};
  height: ${(props: IProps) => (props.height ? props.height : "auto")};
  border-radius: ${(props: IProps) =>
    props.borderRadius ? props.borderRadius : "0"};
  flex: 1;
  overflow: hidden;  
  margin-right: 20px;
  margin-top:30px;  
`;

const StyledImageRapper = styled(View)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "100%")};
  background-color: ${backgroundColor};  
`;

const StyledImage = styled(Image)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "100%")};
  height: ${(props: IProps) =>
    props.imageHeight ? props.imageHeight : "150px"};  
`;

const StyledCardImagesFooter = styled(View)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "100%")};
  background-color: ${backgroundColor};
  color: ${ForeColor};
  padding-top: 20px;
`;

const StyledCardImagesTitle = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};
  color: ${(props: IProps) =>
    props.titleColor ? props.titleColor : ForeColor};
  font-size: ${(props: IProps) => (props.fontSize ? props.fontSize : "16px")};
`;

const StyledCardImagesText = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};
  color: ${(props: IProps) => (props.color ? props.color : ForeColor)};
  font-size: ${(props: IProps) => (props.fontSize ? props.fontSize : "16px")};
  padding-top: 10;
`;

const StyledIconWrapper = styled(View)`
  width: ${(props: IProps) => (props.imageWidth ? props.imageWidth : "auto")};
  background-color: rgba(0,0,0,.8); 
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;

const StyledLive = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};  
  color: ${(props: IProps) => props.theme.danger.main};  
  font-size: 11px;
  z-index: 1;   
`;
const StyledCoverage = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};  
  color: ${(props: IProps) => props.theme.danger.contrastText};  
  font-size: 11px;
  z-index: 1; 
  margin-left: 5px;   
`;

const StyledPremium = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};
  background: rgba(0, 0, 0, 0.6);
  color: #fff;  
  font-size: 16px;
  margin-right: 10px;
`;

const StyledDuration = styled(Text)`
  text-align: ${(props: IProps) => (props.center ? "center" : "left")};
  background: rgba(0, 0, 0, 0.6);
  color: #fff;  
  font-size: 11px;
  padding-left: 5px
`;

export {
  StyledCardImages,
  StyledCardImagesTitle,
  StyledImage,
  StyledCardImagesText,
  StyledCardImagesFooter,
  StyledLive,
  StyledPremium,
  StyledDuration,
  StyledImageRapper,
  StyledIconWrapper,
  StyledCoverage
};
