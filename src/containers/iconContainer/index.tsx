import React from "react";
import IconPage from "../../screens/iconPage";
export interface IProps {
    navigation: any;
}
class IconContainer extends React.PureComponent<IProps> {
    render() {
        return (<IconPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default IconContainer;