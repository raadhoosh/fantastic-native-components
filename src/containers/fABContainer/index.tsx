import React from "react";
import FABPage from "../../screens/fABPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class FABContainer extends React.PureComponent<Props> {
    render() {
        return (<FABPage {...this.props} />);
    }
}

export default FABContainer;