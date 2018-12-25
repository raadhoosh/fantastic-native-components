import React from "react";
import SpinnerPage from "../../screens/spinnerPage";
export interface Props {
    navigation: any;
}
class SpinnerContainer extends React.PureComponent<Props> {
    render() {
        return (<SpinnerPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default SpinnerContainer;