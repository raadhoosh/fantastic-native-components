import React from "react";
import { TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { Container, Content, Text, Header, Title, Left, Right, Icon, Slideshow } from "../../components";
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
    data?: any;
    error?: any;
    loading?: boolean;
}
class FeedPage extends React.PureComponent<Props> {
    render() {

        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon size={30} type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Image
                    source={require("./logo.png")}
                    style={{ width: 140, height: 16, marginTop: 15 }}
                />
                {/* <Right>
                    <Icon type="FontAwesome" name="search" color={"#fff"} />
                </Right> */}
            </Header>
            <Content style={{ backgroundColor: "#010101" }} full>
                {this._render(this.props)}
            </Content>
        </Container>);
    }
    private _render = ({ data, error, loading }: any) => {

        if (error) {
            return <Text danger>{"Error"}</Text>;
        }
        if (loading) {
            return <Text danger>{"loading"}</Text>;
        }

        return <>
            {data.listSliders && data.listSliders.items && <Slideshow data={data.listSliders.items} />}
            {data.listGames && data.listSliders.items && <Game data={data.listGames.items} />}
            {data.listFeeds && data.listSliders.items && <Feed data={data.listFeeds.items} />}
        </>;
    }

}

export default FeedPage;