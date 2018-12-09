import React from "react";
import RadioPage from "../../screens/radioPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class checkBoxContainer extends React.PureComponent<Props> {
    render() {
        return (<RadioPage {...this.props} />);
    }
}

export default checkBoxContainer;