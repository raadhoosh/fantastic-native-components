import React from "react";
import VideoPage from "../../screens/videoPage";

import { Query } from "react-apollo";
import { FEED_QUERY } from "../../common/gql";

export interface Props {
    navigation: any;
}
class VideoContainer extends React.PureComponent<Props> {

    render() {
        return (
            <Query query={FEED_QUERY}>
                {({ data, error, loading }) => {
                    return (<VideoPage
                        data={data}
                        error={error}
                        loading={loading}
                        navigation={this.props.navigation} />
                    );
                }}
            </Query>
        );
    }
}

export default VideoContainer;