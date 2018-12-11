import React from "react";
import Switch from "../../screens/switchPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class switchContainer extends React.PureComponent<Props> {
    render() {
        return (<Switch {...this.props} />);
    }
}

export default switchContainer;