import React from "react";
import FeedPage from "../../screens/feedPage";
export interface IProps {
    navigation: any;
}
import { Query } from "react-apollo";
import { listFeeds } from "../../common/gql";

class FeedContainer extends React.PureComponent<IProps | any> {
    onChangeRout = () => {
        return () => {
            this.props.navigation.navigate("Login");
        };
    }
    render() {
        return (
            <Query query={listFeeds}>
                {({ data, error, loading }) => {
                    if (error) {
                        return (<FeedPage
                            navigation={this.props.navigation}
                            error={error}
                        />);
                    }
                    if (loading) {
                        return (<FeedPage
                            navigation={this.props.navigation}
                            loading
                        />);
                    }
                    return (<FeedPage
                        data={data}
                        navigation={this.props.navigation}
                    />);
                }}
            </Query>
        );
    }
}

export default FeedContainer;