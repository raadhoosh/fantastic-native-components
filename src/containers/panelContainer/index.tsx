import React from "react";
import PanelPage from "../../screens/panelPage";
export interface IProps {
    navigation: any;
}
class PanelContainer extends React.PureComponent<IProps> {
    render() {
        return (<PanelPage  openDrawer={() => {
            this.props.navigation.openDrawer();
        }}  />);
    }
}

export default PanelContainer;