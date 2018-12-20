import React from "react";
import ImagePage from "../../screens/imagePage";
export interface Props {
    navigation: any;   
}

class TextContainer extends React.PureComponent<Props> {
    render() {
        return (<ImagePage openDrawer={() => {
            this.props.navigation.openDrawer();
        }}/>);
    }
}

export default TextContainer;