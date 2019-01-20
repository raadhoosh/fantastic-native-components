import React from "react";
import { TouchableOpacity, ScrollView, Image, Dimensions, View } from "react-native";
import { Container, Content, Text, Header, Title, Left, Right, Icon, Slideshow, Row, Spinner } from "../../components";
import Game from "./components/Game";
import Feed from "./components/Feed";
interface ObInterface {
    title: string;
    content: string;
}
const deviceWidth = Dimensions.get("window").width - 60;

// tslint:disable:max-line-length
export interface Props {
    openDrawer: () => void;
    navigation: any;
    data?: any;
    error?: any;
    loading?: boolean;
}
class FeedPage extends React.PureComponent<Props> {
    render() {

        return (<Container>
            <Header >
                <Left style={{ marginLeft: 0 }}>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon size={30} type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Row style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                }} >
                    <Image
                        source={require("./logo.png")}
                        style={{
                            // alignContent: "center",
                            // alignItems: "center",
                            alignSelf: "center",
                            width: 130,
                            height: 20,
                            left: -25,
                        }}
                    />
                </Row>
            </Header>
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
            {data.listGames && data.listSliders.items && <Game data={data.listGames.items} />}
            {data.listFeeds && data.listSliders.items && <Feed data={data.listFeeds.items} />}
        </>;
    }

}

export default FeedPage;