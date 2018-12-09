import React from "react";
import CheckBox from "../../screens/checkBoxPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class checkBoxContainer extends React.PureComponent<Props> {
    render() {
        return (<CheckBox {...this.props} />);
    }
}

export default checkBoxContainer;