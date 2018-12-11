import React from "react";
import BadgePage from "../../screens/badgePage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class BadgeContainer extends React.PureComponent<Props> {
    render() {
        return (<BadgePage {...this.props} />);
    }
}

export default BadgeContainer;