import React, { Component } from 'react';
import { ViewStyle } from "react-native";
import TabHeading from './TabHeading';
import { StyledTabs, TabContent } from "./Tabs.style";
import { Theme } from '..';

export interface IState {
    currentTabIndex: number
}

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
    currentTab: number;
    dataTabs: Array<{ id: number, title: string, content: string | JSX.Element | JSX.Element[] }>;
    rtl?: boolean;
}

class Tabs extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            currentTabIndex: props.currentTab
        };
        this.onTabChange = this.onTabChange.bind(this)
    }

    onTabChange(index: number) {
        this.setState({ currentTabIndex: index });        
    }

    render() {
       
        const tabContent = this.props.dataTabs ? this.props.dataTabs[this.state.currentTabIndex].content : " ";
        return (
            <StyledTabs {...this.props} >
                <TabHeading
                    tabs={this.props.dataTabs}
                    onTabChange={this.onTabChange}
                    currentIndex= {this.state.currentTabIndex}
                    rtl={this.props.rtl}
                    {...this.props}
                />
                <TabContent {...this.props} >
                    {tabContent}
                </TabContent>
            </StyledTabs>
        );
    }
}

export default Tabs;
