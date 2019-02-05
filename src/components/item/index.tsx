import * as React from "react";
import { StyledView, StyledTouchableOpacity } from "./item.style";
import { ViewStyle } from "react-native";
import { Theme } from "..";

export interface IProps {
    theme?: Theme;
    style?: ViewStyle;
    onPress?: any;
    children: JSX.Element | JSX.Element[];
}

export default function ({ children, onPress, ...others }: IProps) {

    return (
        <StyledView {...others}>
            <StyledTouchableOpacity
                onPress={onPress}
            >
                {children}
            </StyledTouchableOpacity>
        </StyledView>
    );
}