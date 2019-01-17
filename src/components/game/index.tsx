import * as React from "react";
import { StyledGame, StyledGameTitle, StyledImage, StyledGameText, StyledGameFooter, StyledGameImgWrapper, StyledVS } from "./Cards.style";
import { ViewStyle, ImageSourcePropType } from "react-native";
import { Theme } from "..";
import View from "../content/Content.style";

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
  text?: string;
  center?: boolean;
  titleColor?: string;
  source: ImageSourcePropType;
}

const Game = (props: IProps) => {

  return (
    <StyledGame {...props} activeOpacity={0.8} onPress={props.disabled ? undefined : props.onPress} borderRadius={props.borderRadius} >
      <StyledGameImgWrapper>
        <View style={{ backgroundColor: "#000", width: "50%" ,flex: 1}}>
          <StyledImage source={props.source} imageWidth={props.imageWidth} imageHeight={props.imageHeight} />
          <StyledGameText color={props.color} center={props.center} {...props}>
            {props.text}
          </StyledGameText>
        </View>

        <View style={{ width: 56, backgroundColor: "#transparent", position: "absolute", left: "40%", top: 1.75, zIndex: 1 }}>
          <StyledVS color={props.color} center={props.center} {...props}>
            VS
        </StyledVS>
        </View>

        <View style={{ backgroundColor: "#000", width: "50%" ,flex: 1 }}>
          <StyledImage source={props.source} imageWidth={props.imageWidth} imageHeight={props.imageHeight} />
          <StyledGameText color={props.color} center={props.center} {...props}>
            {props.text}
          </StyledGameText>
        </View>

      </StyledGameImgWrapper>

      <StyledGameFooter {...props}>
        <StyledGameTitle titleColor={props.titleColor} center={props.center} {...props}>
          {props.title}
        </StyledGameTitle>
      </StyledGameFooter>

    </StyledGame>
  );
};

export default Game;
