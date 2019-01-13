import React from "react";
import SideBar from "../../screens/sideBar";

const list = [
    { route: "Home", name: "Premier League", data: "PremierLeague" },
    { route: "Home", name: "UEFA Champions League", data: "UEFAChampionsLeague" },
    { route: "Home", name: "UEFA Europa League", data: "PremierLeague" },
    { route: "Home", name: "Internationals", data: "Internationals" },
    { route: "Home", name: "Podcasts", data: "Podcasts" },
    { route: "Home", name: "Log In | Sign-Up" },
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