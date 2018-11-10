import React from "react";
import { View, Text } from "react-native";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
}
class TextPage extends React.PureComponent<Props> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>{this.props.children}</Text>
            </View>
        );
    }
}

export default TextPage;