import React from "react";
import SearchPage from "../../screens/searchPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class SearchContainer extends React.PureComponent<Props> {
    render() {
        return (<SearchPage {...this.props} />);
    }
}

export default SearchContainer;