import React from "react";
import TextInputPage from "../../screens/textInputPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class TextContainer extends React.PureComponent<Props> {
    render() {
        return (<TextInputPage {...this.props} />);
    }
}

export default TextContainer;