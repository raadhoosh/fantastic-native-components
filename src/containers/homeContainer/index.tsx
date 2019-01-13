import React from "react";
import HomePage from "../../screens/homePage";
export interface IProps {
    navigation: any;
}
class HomeContainer extends React.PureComponent<IProps> {
    render() {
        const dataArray = [
            { title: "First Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
          ];
        return (<HomePage  openDrawer={() => {
            this.props.navigation.openDrawer();
        }}   dataArray={dataArray} expanded={0}   />);
    }
}

export default HomeContainer;