import React from "react";
import FeedPage from "../../screens/feedPage";
export interface IProps {
    navigation: any;
}
import { Query } from "react-apollo";
import { listFeeds } from "../../common/gql";

class FeedContainer extends React.PureComponent<IProps | any> {

    render() {
        return (
            <Query query={listFeeds}>
                {({ data, error, loading }) => {
                    if (error) {
                        return (<FeedPage
                            navigation={this.props.navigation}
                            error
                            openDrawer={() => {
                                this.props.navigation.openDrawer();
                            }} />);
                    }
                    if (loading) {
                        return (<FeedPage
                            navigation={this.props.navigation}
                            loading
                            openDrawer={() => {
                                this.props.navigation.openDrawer();
                            }} />);
                    }
                    return (<FeedPage
                        data={data}
                        navigation={this.props.navigation}
                        openDrawer={() => {
                            this.props.navigation.openDrawer();
                        }} />);
                }}
            </Query>
        );
    }
}

export default FeedContainer;