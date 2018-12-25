import React from "react";
import ToastsPage from "../../screens/toastsPage";
export interface Props {
    navigation: any;
}
class ToastsContainer extends React.PureComponent<Props> {
    render() {
        return (<ToastsPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default ToastsContainer;