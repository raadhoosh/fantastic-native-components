import React from "react";
import TextInputPage from "../../screen/TextInputPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class TextContainer extends React.PureComponent<Props> {
    render() {
        return (<TextInputPage {...this.props} >{this.props.children}</TextInputPage>);
    }
}

export default TextContainer;