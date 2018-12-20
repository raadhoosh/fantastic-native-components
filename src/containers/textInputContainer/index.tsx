import React from "react";
import TextInputPage from "../../screens/textInputPage";
export interface Props {
    navigation: any;
}
class TextInputContainer extends React.PureComponent<Props> {
    render() {
        return (<TextInputPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default TextInputContainer;