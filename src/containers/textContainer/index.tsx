import React from "react";
import TextPage from "../../screens/textPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    navigation: any;
}
class TextContainer extends React.PureComponent<Props> {
    render() {
        return (<TextPage 
            openDrawer={() => {
                this.props.navigation.openDrawer();
            }}
            {...this.props} />);
    }
}

export default TextContainer;