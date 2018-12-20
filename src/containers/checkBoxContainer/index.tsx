import React from "react";
import CheckBoxPage from "../../screens/checkBoxPage";
export interface Props {
    navigation: any;
}
class checkBoxContainer extends React.PureComponent<Props> {
    render() {
        return (<CheckBoxPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default checkBoxContainer;