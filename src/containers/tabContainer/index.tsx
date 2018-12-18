import React from "react";
import TabPage from "../../screens/tabPage";
export interface IProps {
    navigation: any;
}
class TabContainer extends React.PureComponent<IProps> {
    render() {
        return (<TabPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default TabContainer;