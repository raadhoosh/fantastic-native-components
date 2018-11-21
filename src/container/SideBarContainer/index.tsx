import React from "react";
import SideBar from "../../screen/SideBar";

const list = [
    { route: "Grid", name: "Grid" },
    { route: "Text", name: "Text" },
    { route: "Button", name: "Button" },
    { route: "TextInput", name: "TextInput" },
    { route: "Image", name: "Image" },
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