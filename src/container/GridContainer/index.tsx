import React from "react";
import GridPage from "../../screen/GridPage";
export interface IProps {
    navigation: any;
}
class GridContainer extends React.PureComponent<IProps> {
    render() {
        return (<GridPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default GridContainer;