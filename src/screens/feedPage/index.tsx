import React from "react";
import {  Dimensions, View } from "react-native";
import { Container, Content, Text, Spinner } from "../../components";
import { Slideshow, HeaderSport } from "../../sportComponents";

import Feed from "./components/Feed";
interface ObInterface {
    title: string;
    content: string;
}

// tslint:disable:max-line-length
export interface Props {
    navigation: any;
    data?: any;
    error?: any;
    loading?: boolean;
}
class FeedPage extends React.PureComponent<Props> {
    render() {

        return (<Container>
            <HeaderSport
                navigation={this.props.navigation}
            />
            <Content style={{ backgroundColor: "#010101" }} full>
                {this._render(this.props)}
            </Content>
        </Container>);
    }
    private _render = ({ data, error, loading }: any) => {
        const { navigate } = this.props.navigation;
        if (error) {
            return <Text danger>{"Error"}</Text>;
        }
        if (loading) {
            return <View style={{
                marginTop: 20,
                height: 200,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
            }} >
                <Spinner size={30} danger name={"cog"} />
            </View>;
        }

        return <>
            {data.listSliders && data.listSliders.items && <Slideshow onProps={() => {
                navigate("Video");
            }} data={data.listSliders.items} />}
            {/* {data.listGames && data.listSliders.items && <Game data={data.listGames.items} />} */}
            {data.listFeeds && data.listSliders.items && <Feed data={data.listFeeds.items} />}
        </>;
    }

}

export default FeedPage;