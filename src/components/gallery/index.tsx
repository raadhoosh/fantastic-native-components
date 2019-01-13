import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "../../components";
import { StyledRadio, StyledWrapper, StyledText } from "./Gallery.style";
import { Theme } from "..";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

export interface IState {
  entries: Array<Element>;
}

export interface IProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  inverse?: boolean;
  color?: string;
  textColor?: string;
  width?: number | string;
  theme?: Theme;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: number;
  borderRadius?: string;
  label?: string;
  checked?: boolean;
}

class Radio extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      entries: []
    }
  }

  _renderItem({ item, index }, parallaxProps: any) {
    return (
      <View>
        <ParallaxImage
          source={{ uri: item.thumbnail }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <StyledWrapper>
        <Carousel
          data={this.state.entries}
          renderItem={this._renderItem}
          hasParallaxImages={true}
        />

      </StyledWrapper>
    );
  }
}

export default Radio;
