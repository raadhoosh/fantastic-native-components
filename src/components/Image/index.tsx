import * as React from "react";
import StImage from "./image.style";

interface IProps {   
  source?: any;
  style?: any;
}

const Image = (props: IProps) => {

  return (
    <StImage {...props} source={props.source} />
  );
};

export default Image;
