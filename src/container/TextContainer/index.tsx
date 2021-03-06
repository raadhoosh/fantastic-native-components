import React from "react";
import TextPage from "../../screen/TextPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class TextContainer extends React.PureComponent<Props> {
    render() {
        return (<TextPage {...this.props} />);
    }
}

export default TextContainer;