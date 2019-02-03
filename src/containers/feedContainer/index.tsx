import React from "react";
import FeedPage from "../../screens/feedPage";
export interface IProps {
    navigation: any;
}
import { Query } from "react-apollo";
import { listFeeds } from "../../common/gql";

import JWPlayer from "./JWPlayer";
import { View, Text } from "react-native";
import Button from "./Button";

class FeedContainer extends React.PureComponent<IProps | any, any> {
    public onTop = () => {
        let c = this.state ? (this.state.count ? this.state.count : 0) : 0;
        this.setState({
            count: c + 1,
            start: true,
        });
    }
    render() {
        return (<View style={{ marginTop: 50, padding: 24 }}>
            <Text>
                margin {this.state ? this.state.count : 0}
            </Text>
            <Button OnTop={this.onTop} buttonText={"salam"} style={{ height: 40, width: 150, backgroundColor: "red" }} />
            <JWPlayer

                buttonText={this.state ? (this.state.start ? "a" : "false") : "false"}
                // player={this.state ? (this.state.start ? true : false) : false}
                style={{ width: 300, height: 300, backgroundColor: "red" }} />
        </View>);
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
                    JWPlayer.show("Awesome", JWPlayer.SHORT);
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