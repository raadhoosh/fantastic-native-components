// .RH-tab {
//   margin: 0 auto 20px auto;
//   .tab {
//     margin: 0;
//     padding: 0;
//     position: relative;
//     top: 1px;
//     z-index: 1;
//     font-size: 20px;
//     box-sizing: border-box;
//     .tabTitle {
//       padding: 5px 15px;
//       cursor: pointer;
//       display: inline-block;
//       font-size: 13px;
//       border-top: 4px solid transparent;
//       border-left: 1px solid transparent;
//       border-right: 1px solid transparent;
//       &.active {
//         background-color: $white-color;
//         border-top: 4px solid $primary-border-color;
//         border-left: 1px solid $border-light-color;
//         border-right: 1px solid $border-light-color;
//       }
//     }
//   }
//   > div {
//     background-color: $white-color;
//     padding: 20px;
//     border: 1px solid $border-light-color;
//   }
// }

import styled from "styled-components";
import { TouchableOpacity, Text, View } from "react-native";
import { Theme } from '..';

interface IProps {
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
    color?: string;
    width?: string;    
    theme?: Theme;
    disabled?: boolean;
    fontSize?: string | number;
    borderRadius?: string;
}

function getColor(props: IProps) {

    let backgroundColor =  "#6c757d";
    let ForeColor =  "#fff";
    
    if (props.color) {
        ForeColor = props.color;
    }
    if (props.backgroundColor) {
        backgroundColor = props.backgroundColor;
    } else {
        const color =
            (props.primary && "primary")
            || (props.secondary && "secondary")
            || (props.success && "success")
            || (props.info && "info")
            || (props.warning && "warning")
            || (props.danger && "danger");

        if (typeof (color) === "string" && props.theme) {
            backgroundColor = props.theme[color].main;
            ForeColor = props.theme[color].contrastText;
        }

    }

    const btnColor = { backgroundColor: backgroundColor, ForeColor: ForeColor };
    return btnColor;
}

const backgroundColor = (props: IProps) => getColor(props).backgroundColor;
const ForeColor = (props: IProps) => getColor(props).ForeColor;

const TabWrapper = styled(View)`      
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};    
    border: 1px solid ${(props: IProps) => props.disabled ? "#ddd" : backgroundColor};        
    width: ${(props: IProps) => props.width ? props.width :'auto'};  
    border-radius: ${(props: IProps) => props.borderRadius ? props.borderRadius :'0'}; 
    margin-bottom: 5px;    
`;

const StyledTabTitle = styled(TouchableOpacity)`    
    text-align: center;   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'}; 
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};  
`;

const StyledTabHeading = styled(View)`    
    flex: 1;
    flex-direction: row;    
    align-items:center;  
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};  
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'}; 
`;

const StyledTabTitleText = styled(Text)`    
    text-align: center;   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '16px'}; 
    padding: 10px;
    background-color: ${(props: IProps) => props.disabled ? "#ddd" : (props.inverse ? ForeColor : backgroundColor)};  
`;

const StyledTabs = styled(View)`   
    color: ${(props: IProps) => props.disabled ? "#a1a1a1" : props.inverse ? backgroundColor : ForeColor}; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'}; 
`;

const TabContent = styled(Text)`      
    color: #000; 
    font-size:${(props: IProps) => props.fontSize ? props.fontSize : '14px'}; 
    padding: 10px;
`;

export { TabWrapper, StyledTabTitle, StyledTabTitleText, StyledTabHeading, StyledTabs, TabContent };