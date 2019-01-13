import React from "react";
import { withTheme } from "styled-components";

import { TouchableOpacity, ScrollView } from "react-native";
import { Text, Theme, List, Item } from "./../../components";
export interface Props {
    theme: Theme;
    routes: Array<any>;
    onChangeRoute: any;
}
class SideBar extends React.PureComponent<Props> {
    render() {
        const { routes, onChangeRoute } = this.props;
        const color = this.props.theme.primary.light;
        return (
            <ScrollView style={{ flex: 1, marginTop: 20, backgroundColor: color }}>
                {routes.map((item, index) => (
                    <Item
                        onPress={onChangeRoute(item.route)}
                        key={`route-${index}`}>
                        <Text
                            fontSize={18}
                            secondary >
                            {item.name}
                        </Text>
                    </Item>
                ))}
            </ScrollView>
        );
    }
}

export default withTheme(SideBar);