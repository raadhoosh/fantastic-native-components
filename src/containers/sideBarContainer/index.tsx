import React from "react";
import SideBar from "../../screens/sideBar";

const list = [
    { route: "Panel", name: "Panel" },
    { route: "Accordion", name: "Accordion" },
    { route: "Icon", name: "Icon" },
    { route: "Grid", name: "Grid" },
    { route: "Text", name: "Text" },
    { route: "Button", name: "Button" },
    { route: "TextInput", name: "TextInput" },
    { route: "Image", name: "Image" },
    { route: "Modal", name: "Modal" },
    { route: "CheckBox", name: "CheckBox" },
    { route: "Radio", name: "Radio" },
    { route: "Badge", name: "Badge" },
    { route: "Search", name: "Search" },
    { route: "List", name: "List" },
    { route: "Tab", name: "Tab" },
    { route: "Cards", name: "Cards" },
    { route: "Spinner", name: "Spinner" },
    { route: "FAB", name: "FAB" },
];
export interface IProps {
    navigation: any;
}
class SideBarContainer extends React.PureComponent<IProps | any> {
    onChangeRout = (route: string) => {
        return () => {
            this.props.navigation.navigate(route);
        };
    }
    render() {
        return (<SideBar
            routes={list}
            onChangeRoute={this.onChangeRout}
        />);
    }
}

export default SideBarContainer;