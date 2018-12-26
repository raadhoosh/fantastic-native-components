import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
export interface Props {
    routes: Array<any>;
    onChangeRoute: any;
}
class SideBar extends React.PureComponent<Props> {
    render() {
        const { routes, onChangeRoute } = this.props;
        return (
            <ScrollView style={{ flex: 1, marginTop: 20 }}>
                {routes.map((item, index) => (
                    <TouchableOpacity
                        onPress={onChangeRoute(item.route)}
                        key={`route-${index}`}
                        style={{ width: "100%", borderBottomColor: "#111", borderBottomWidth: 1, padding: 6 }}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}

export default SideBar;