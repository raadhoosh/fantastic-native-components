import React from "react";
import ButtonPage from "../../screens/buttonPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class ButtonContainer extends React.PureComponent<Props> {
    render() {
        return (<ButtonPage {...this.props} />);
    }
}

export default ButtonContainer;