import React from "react";
import RadioPage from "../../screens/radioPage";
export interface Props {
    navigation: any;
}
class checkBoxContainer extends React.PureComponent<Props> {
    render() {
        return (<RadioPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default checkBoxContainer;