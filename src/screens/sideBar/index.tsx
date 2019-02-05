import React from "react";
import { withTheme } from "styled-components";
import { ScrollView, Platform } from "react-native";
import { Text, Theme, Item } from "./../../components";
import { MenuItem } from "../../sportComponents";
const isIos = Platform.OS === "ios";

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
        const color = this.props.theme.primary.dark;
        if (error) {
            return <ScrollView style={{ flex: 1, marginTop: isIos ? 0 : 20, paddingTop: isIos ? 20 : 0, backgroundColor: color }}>
                <Text
                    fontSize={18}
                    secondary>
                    {JSON.stringify(error)}
                </Text>
            </ScrollView>;
        }
        if (loading) {
            return <ScrollView style={{ flex: 1, marginTop: isIos ? 0 : 20, paddingTop: isIos ? 20 : 0, backgroundColor: color }}>
                <Text
                    fontSize={18}
                    secondary>
                    {"loading"}
                </Text>
            </ScrollView>;
        }

        return (
            <ScrollView style={{ flex: 1, marginTop: isIos ? 0 : 20, paddingTop: isIos ? 20 : 0, paddingRight: 20, backgroundColor: color }}>
                {routes.listMenus.items.map((item: any, index: number) => (
                    <MenuItem
                        key={item.toString()}
                        title={item.name} />
                    // <Item
                    //     onPress={onChangeRoute(item.route)}
                    //     key={`route-${index}`}>
                    //     <Text
                    //         fontSize={18}
                    //         secondary >
                    //         {item.name}
                    //     </Text>
                    // </Item>
                ))}
            </ScrollView>
        );
    }
}

export default withTheme(SideBar);