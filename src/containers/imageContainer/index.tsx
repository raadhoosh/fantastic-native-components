import React from "react";
import ImagePage from "../../screens/imagePage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;   
}

class TextContainer extends React.PureComponent<Props> {
    render() {
        return (<ImagePage {...this.props}/>);
    }
}

export default TextContainer;