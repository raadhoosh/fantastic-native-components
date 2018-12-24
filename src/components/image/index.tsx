import * as React from "react";
import { ImagePropsBase, ImageStyle, Image } from "react-native";

interface IProps extends ImagePropsBase {
  style?: ImageStyle | object | Array<ImageStyle>;
}

const Img = (props: IProps) => {

  return (
    <Image {...props} style={props.style} />
  );
};

export default Img;
