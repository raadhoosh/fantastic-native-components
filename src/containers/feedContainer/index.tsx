import React from "react";
import FeedPage from "../../screens/feedPage";
export interface IProps {
    navigation: any;
}
import { Query } from "react-apollo";
import { LOCAL_FEED_QUERY } from "../../common/gql";
import { Text } from "react-native";

class FeedContainer extends React.PureComponent<IProps | any> {

    render() {
        return (
            <Query query={LOCAL_FEED_QUERY}>
                {({ data, error, loading }) => {
                    if (error) {
                        return (<FeedPage
                            error
                            openDrawer={() => {
                                this.props.navigation.openDrawer();
                            }} />);
                    }
                    if (loading) {
                        return (<FeedPage
                            loading
                            openDrawer={() => {
                                this.props.navigation.openDrawer();
                            }} />);
                    }
                    return (<FeedPage
                        data={data}
                        openDrawer={() => {
                            this.props.navigation.openDrawer();
                        }} />);
                }}
            </Query>
        );
    }
}

export default FeedContainer;