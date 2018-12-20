import React from "react";
import ListPage from "../../screens/listPage";
export interface Props {
    navigation: any;
}

class ListContainer extends React.PureComponent<Props> {
    render() {
        return (<ListPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default ListContainer;