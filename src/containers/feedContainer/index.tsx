import React from "react";
import FeedPage from "../../screens/feedPage";
export interface IProps {
    navigation: any;
}
import { Query } from "react-apollo";
import { listFeeds } from "../../common/gql";
import { View, Text } from "react-native";
interface IState {
    carousel: any;
    loading: boolean;
}
interface ICarousel {
    id: any;
    assets: any;
    title: any;
}

class FeedContainer extends React.PureComponent<IProps, IState> {
    state = {
        carousel: [],
        loading: true,
    };
    onChangeRout = () => {
        return () => {
            this.props.navigation.navigate("Login");
        };
    }
    componentWillMount() {

        fetch("https://web-pp.sport-ott.com/api/metadata/editorials/home_hero_carousel", { method: "GET" })
            .then((data) => {
                if (data.status === 200) {
                    // tslint:disable-next-line:no-debugger
                    let carousel: any = [];
                    // tslint:disable
                    JSON.parse(data["_bodyText"]).assets.map((i: any) => {
                        carousel.push(i);
                    });
                    this.setState({
                        carousel: carousel,
                        loading: false,
                    });
                }
            })
            .catch((err: any) => {
                alert(err);
            });
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
                    if (loading || this.state.loading) {
                        return (<FeedPage
                            navigation={this.props.navigation}
                            loading
                        />);
                    }
                    if (this.state.carousel) {
                        return (<FeedPage
                            data={data}
                            carousel={this.state.carousel}
                            navigation={this.props.navigation}
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