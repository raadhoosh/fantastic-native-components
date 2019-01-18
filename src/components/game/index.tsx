import * as React from "react";
import {
  StyledGame,
  StyledGameTitle,
  StyledImage,
  StyledGameText,
  StyledGameFooter,
  StyledGameImgWrapper,
  StyledVS,
  StledTeams,
  StyledVSWrapper,
  StyledTextStart
} from "./Cards.style";
import { ViewStyle, ImageSourcePropType, Text  } from "react-native";
import { Theme } from "..";

interface IProps {
  style?: ViewStyle | object | Array<ViewStyle>;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  inverse?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  theme?: Theme;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: string | number;
  borderRadius?: number;
  title?: string;
  textLeft?: string;
  textRight?: string;
  center?: boolean;
  titleColor?: string;
  sourceLleft: ImageSourcePropType;
  sourceRight: ImageSourcePropType;
}

const Game = (props: IProps) => {
  return (
    <StyledGame
      {...props}
      activeOpacity={0.8}
      onPress={props.disabled ? undefined : props.onPress}
      borderRadius={props.borderRadius}
    >
      <StyledGameImgWrapper>
        <StledTeams>
          <StyledImage
            source={props.sourceLleft}
            imageWidth={props.imageWidth}
            imageHeight={props.imageHeight}
          />
          <StyledGameText color={props.color} center={props.center} {...props}>
            {props.textLeft}
          </StyledGameText>
        </StledTeams>

        <StyledVSWrapper>
          <StyledVS color={props.color} center={props.center} {...props}>
            VS
          </StyledVS>
        </StyledVSWrapper>

        <StledTeams>
          <StyledImage
            source={props.sourceRight}
            imageWidth={props.imageWidth}
            imageHeight={props.imageHeight}
          />
          <StyledGameText color={props.color} center={props.center} {...props}>
            {props.textRight}
          </StyledGameText>
        </StledTeams>        
      </StyledGameImgWrapper>

      <StyledGameFooter {...props}>
      <StyledTextStart>Starts</StyledTextStart>
        <StyledGameTitle
          titleColor={props.titleColor}
          center={props.center}
          {...props}
        >
         SAT {props.title}
        </StyledGameTitle>
      </StyledGameFooter>
    </StyledGame>
  );
};

export default Game;
