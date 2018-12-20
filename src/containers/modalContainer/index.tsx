import React from "react";
import ModalPage from "../../screens/modalPage";
export interface Props {
    navigation: any;
}
class ModalContainer extends React.PureComponent<Props> {
    render() {
        return (<ModalPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default ModalContainer;