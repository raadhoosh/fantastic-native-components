import React from "react";
import ButtonPage from "../../screens/buttonPage";
export interface Props {
    navigation: any;
}
class ButtonContainer extends React.PureComponent<Props> {
    render() {
        return (<ButtonPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default ButtonContainer;