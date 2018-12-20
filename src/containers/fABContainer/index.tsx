import React from "react";
import FABPage from "../../screens/fABPage";
export interface Props {
    navigation: any;
}
class FABContainer extends React.PureComponent<Props> {
    render() {
        return (<FABPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default FABContainer;