import React from "react";
import { TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { Container, Content, Text, Header, Footer, Title, Left, Right, Icon, Accordion, Row, Col, CardImages, Button } from "../../components";
import Carousel from "./components/Carousel";
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
                        <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"Optus Sport"}</Title>
                <Right>
                    <Icon type="FontAwesome" name="search" color={"#fff"} />
                </Right>
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
            {data.sliders && <Carousel data={data.sliders} />}
            {data.games && <Game data={data.games} />}
            {data.feeds && <Feed data={data.feeds} />}
        </>;
    }

}

export default FeedPage;