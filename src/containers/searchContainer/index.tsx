import React from "react";
import SearchPage from "../../screens/searchPage";
export interface Props {
    navigation: any;
}
class SearchContainer extends React.PureComponent<Props> {
    render() {
        return (<SearchPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default SearchContainer;