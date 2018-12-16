import React from "react";
import ListPage from "../../screens/listPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class ListContainer extends React.PureComponent<Props> {
    render() {
        return (<ListPage {...this.props} />);
    }
}

export default ListContainer;