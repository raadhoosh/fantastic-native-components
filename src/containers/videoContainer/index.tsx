import React from "react";
import VideoPage from "../../screens/videoPage";
export interface Props {
    navigation: any;
}
class VideoContainer extends React.PureComponent<Props> {
    render() {
        return (<VideoPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default VideoContainer;