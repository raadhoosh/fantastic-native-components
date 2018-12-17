import React, { Component } from "react";
import { ImageSourcePropType } from "react-native";
import { StyledList } from "./List.style";
import { Theme } from "..";
import ListItem from "./ListItem"

export interface IProps {
  theme?: Theme;
  backgroundColor?: string;
  color?: string;
  width?: number;
  height?: number;
  onPress?: () => void;
  borderRadius?: number;
  borderColor?: string;
  text?: string;
  id?: number;
  dataSource: Array<{ id: number, text: string, source: ImageSourcePropType }>;  
}

class List extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <StyledList>
        {
          this.props.dataSource.map((item, index) => (
            <ListItem
              {...this.props}
              key={index}
              source={item.source}
              id={item.id}
              text={item.text}
            />
          ))
        }
      </StyledList>
    );
  }
}

export default List;
