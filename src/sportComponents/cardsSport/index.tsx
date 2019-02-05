import * as React from "react";
import {
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
} from "./Cards.style";
import { ViewStyle, ImageSourcePropType } from "react-native";
import { Icon } from "../../components";
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
  text?: string;
  center?: boolean;
  titleColor?: string;
  icon?: string;
  live?: string | boolean;
  coverage?: string | boolean;
  time?: string;
  source: ImageSourcePropType;
}

const CardImagesSport = (props: IProps) => {
  return (
    <StyledCardImages
      {...props}
      activeOpacity={0.8}
      onPress={props.disabled ? undefined : props.onPress}
      borderRadius={props.borderRadius}
    >
      <StyledImageRapper>
        <StyledImage
          source={props.source}
          imageWidth={props.imageWidth}
          imageHeight={props.imageHeight}
        />
        <StyledIconWrapper>
          {props.icon && (
            <StyledPremium>
              <Icon
                style={{ marginLeft: 12 }}
                type="FontAwesome"
                name={props.icon}
                color={"#ccc"}
              />
            </StyledPremium>
          )}
          {props.live && <StyledLive>{"LIVE"}</StyledLive>}
          {props.coverage && <StyledCoverage>{"Coverage in "}</StyledCoverage>}
          {props.time && <StyledDuration>{props.time}</StyledDuration>}
        </StyledIconWrapper>

      </StyledImageRapper>

      <StyledCardImagesFooter {...props}>
        <StyledCardImagesTitle
          titleColor={props.titleColor}
          center={props.center}
          {...props}
        >
          {props.title}
        </StyledCardImagesTitle>
        <StyledCardImagesText
          color={props.color}
          center={props.center}
          {...props}
        >
          {props.text}
        </StyledCardImagesText>
      </StyledCardImagesFooter>
    </StyledCardImages>
  );
};

export default CardImagesSport;
