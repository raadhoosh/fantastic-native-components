import React from "react";
import ModalPage from "../../screens/modalPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class ModalContainer extends React.PureComponent<Props> {
    render() {
        return (<ModalPage {...this.props} />);
    }
}

export default ModalContainer;