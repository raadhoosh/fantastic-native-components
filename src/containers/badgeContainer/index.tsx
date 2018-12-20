import React from "react";
import BadgePage from "../../screens/badgePage";
export interface Props {
    navigation: any;
}
class BadgeContainer extends React.PureComponent<Props> {
    render() {
        return (<BadgePage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default BadgeContainer;