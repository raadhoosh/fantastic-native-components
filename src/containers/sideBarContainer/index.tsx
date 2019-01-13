import React from "react";
import SideBar from "../../screens/sideBar";

const list = [
    { route: "Home", name: "Home" },
   
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