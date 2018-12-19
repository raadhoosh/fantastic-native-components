import * as React from "react";
import { ViewStyle } from "react-native";
import { StyledTabHeading } from "./Tabs.style";
import TabTitle from './TabTitle';
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
  color?: string;
  width?: string;  
  theme?: Theme;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: string | number;
  borderRadius?: string;

  tabs?: Array<{ id: number, title: string, content: string | JSX.Element | JSX.Element[] }>;
  currentTab : number; 
  active?: string;
  onTabChange:(index: number) => void;  
  index?: number;
  rtl?:boolean;
}

const TabHeading = (props: IProps) => {
alert(props.currentTab)
  return (
    <StyledTabHeading>    

    {
        props.tabs && props.tabs.map((tab, index) => {
            return (
                <TabTitle
                    title={tab.title}
                    key={index}
                    index={index}
                    currentTab={props.currentTab}
                    active={`${props.currentTab === index ? 'true' : 'false'}`}
                    onTabChange={props.onTabChange}                    
                    rtl={props.rtl}
                    style={[props.currentTab === index ? {backgroundColor: "#f00"} : " "]}
                    {...props}
                />
            );
        })
    }
</StyledTabHeading>
  );
};

export default TabHeading;
