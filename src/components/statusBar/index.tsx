import * as React from "react";
import {
    View,
    StatusBar,
    Platform,
} from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
export interface IProps {
    barStyle: "dark-content" | "default" | "light-content";
    backgroundColor: string;
}
export default ({ backgroundColor, barStyle }: IProps) => (
    <View style={[{
        height: STATUSBAR_HEIGHT,
    }, { backgroundColor }]}>
        <StatusBar  translucent backgroundColor={backgroundColor} barStyle={barStyle} />
    </View>
);