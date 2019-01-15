import React from "react";
import { withTheme } from "styled-components";

import { TouchableOpacity, ScrollView } from "react-native";
import { Text, Theme, List, Item } from "./../../components";
export interface Props {
    theme: Theme;
    routes: any;
    onChangeRoute: any;
    error: any;
    loading: boolean;
}
class SideBar extends React.PureComponent<Props> {
    render() {
        const { routes, loading, error, onChangeRoute } = this.props;
        const color = this.props.theme.primary.light;
        if (error) {
            return <ScrollView style={{ flex: 1, marginTop: 20, backgroundColor: color }}>
                <Text
                    fontSize={18}
                    secondary>
                    {JSON.stringify(error)}
                </Text>
            </ScrollView>;
        }
        if (loading) {
            return <ScrollView style={{ flex: 1, marginTop: 20, backgroundColor: color }}>
                <Text
                    fontSize={18}
                    secondary>
                    {"loading"}
                </Text>
            </ScrollView>;
        }

        return (
            <ScrollView style={{ flex: 1, marginTop: 20, backgroundColor: color }}>
                {routes.menus.map((item: any, index: number) => (
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