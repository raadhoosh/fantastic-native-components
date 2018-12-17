import * as React from "react";
import { StyledCardImages, StyledCardImagesTitle, StyledImage, StyledCardImagesText, StyledCardImagesFooter } from "./Cards.style";
import { ViewStyle, ImageSourcePropType } from "react-native";
import { Theme } from '..';

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
  borderRadius?: string;
  title?: string;
  text?: string;
  center?: boolean;
  titleColor?: string;
  source: ImageSourcePropType;
}

const CardImages = (props: IProps) => {

  return (
    <StyledCardImages {...props} activeOpacity={0.8} onPress={props.disabled ? undefined : props.onPress} >

      <StyledImage source={props.source} imageWidth={props.imageWidth} imageHeight={props.imageHeight} />
      <StyledCardImagesFooter {...props}>
        <StyledCardImagesTitle titleColor={props.titleColor} center={props.center} {...props}>
          {props.title}
        </StyledCardImagesTitle>
        <StyledCardImagesText color={props.color} center={props.center} {...props}>
          {props.text}
        </StyledCardImagesText>
      </StyledCardImagesFooter>
    </StyledCardImages>
  );
};

export default CardImages;
