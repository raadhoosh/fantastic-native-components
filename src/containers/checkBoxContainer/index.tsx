import React from "react";
import CheckBoxPage from "../../screens/checkBoxPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class checkBoxContainer extends React.PureComponent<Props> {
    render() {
        return (<CheckBoxPage {...this.props} />);
    }
}

export default checkBoxContainer;