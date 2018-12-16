import styled from "styled-components";
import { Text, TouchableOpacity, TouchableOpacityProps, Image, View  } from "react-native";
import { Theme } from '..';

interface IProps extends TouchableOpacityProps { 
    theme?: Theme;   
    backgroundColor?: string;
    color?: string;
    width?: number;
    height?: number;  
    fontSize?: string | number;
    borderRadius?: number;   
    borderColor?: string; 
}

const StyledList = styled(View)`    
    align-items: center;    
    border-top-width: 1;
    border-top-color: ${(props: IProps) => props.borderColor ? props.borderColor : "#ddd"}; 
`;

const StyledListItem = styled(TouchableOpacity)`          
    justify-content: center;
    align-items: center;
    background-color: ${(props: IProps) => props.backgroundColor ? props.backgroundColor : "#fff"};     
    flex: 1;
    flex-direction: row;   
    margin-bottom: ${(props: IProps) => props.backgroundColor ? "1" : "0"}; 
    padding: 5px; 
    border-bottom-width: 1;       
    border-bottom-color: ${(props: IProps) => props.borderColor ? props.borderColor : "#ddd"};
    border-right-width: 1;
    border-right-color: ${(props: IProps) => props.borderColor ? props.borderColor : "#ddd"};
    border-left-width: 1;
    border-left-color: ${(props: IProps) => props.borderColor ? props.borderColor : "#ddd"};
    width: ${(props: IProps) => props.width ? props.width : 'auto'};       
    height: ${(props: IProps) => props.height ? props.height : 'auto'};
`;

const StyledImage = styled(Image)`      
    border-color: ${(props: IProps) => props.borderColor ? props.borderColor : "#ddd"}; 
    border-width: 1;       
    width:50;       
    height: 50;             
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius : '0'};        
`;

const StyledText = styled(Text)`      
    flex:1;    
    padding-left: 10;
    color: ${(props: IProps) => props.color ? props.color : "#000"}; 
`;

export { StyledListItem, StyledList, StyledImage, StyledText };