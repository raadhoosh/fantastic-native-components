import React, { Component } from "react";
import { ImageSourcePropType } from "react-native";
import { Icon } from "../../components";
import { StyledListItem ,StyledImage, StyledText} from "./List.style";
import { Theme } from "..";

export interface IProps {  
  theme?: Theme;
  backgroundColor?: string;
  color?: string;
  width?: number ;
  height?: number ;  
  onPress?: () => void; 
  borderRadius?: number;
  borderColor?: string; 
  text?: string;  
  id?: number;  
  dataSource:Array<{id: number, text: string, source: ImageSourcePropType}>;
  source : ImageSourcePropType;
}

class ListItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <StyledListItem
        onPress={this.props.onPress}
        key={this.props.id}   
        {...this.props}     
      >
        <StyledImage source={this.props.source}
         borderRadius={this.props.borderRadius} 
         borderColor={this.props.borderColor} />  

        <StyledText color={this.props.color}>
          {this.props.text}
        </StyledText>

        <Icon name="chevron-right" type="FontAwesome" size={12} color="#ddd" />
      </StyledListItem>
    );
  }
}

export default ListItem;
