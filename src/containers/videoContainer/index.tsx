import React from "react";
import VideoPage from "../../screens/videoPage";

import { Query } from "react-apollo";
import { FEED_QUERY } from "../../common/gql";

export interface Props {
    navigation: any;
}
class VideoContainer extends React.PureComponent<Props> {
    componentWillMount() {
        let a: string = JSON.stringify({ "username": "salman.zare@optus.com.au", "password": "Salman@2o19", "rememberMe": "false" });
        // fetch("https://web-pp.sport-ott.com/api/userauth/login", { method: "POST", body: a })
        //     .then((data) => {
        //         alert(JSON.stringify(data));
        //     })
        //     .catch((err: any) => {
        //         alert(err);
        //     });
    }
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