import React from "react";
import ButtonPage from "../../screen/ButtonPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class TextContainer extends React.PureComponent<Props> {
    render() {
        return (<ButtonPage {...this.props} />);
    }
}

export default TextContainer;