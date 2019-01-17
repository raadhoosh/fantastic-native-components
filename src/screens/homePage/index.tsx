import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Icon, Accordion, Gallery, Slideshow, Game } from "../../components";
interface ObInterface {
    title: string;
    content: string;
}
export interface Props {
    openDrawer: () => void;
    dataArray: Array<ObInterface>;
    expanded: number;
}
class homePage extends React.PureComponent<Props> {
    render() {
        const { dataArray, expanded } = this.props;
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"Sport"}</Title>
                <Right>
                    <Icon type="FontAwesome" name="search" color={"#fff"} />
                </Right>
            </Header>
            <Content full>
                <Slideshow />
                <Game
                    primary
                    fontSize={24}
                    titleColor={"#f00"}
                    width={"80%"}
                    title={"Tailored Jeans"}
                    // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    source={require('./img.png')}
                    text={"Southampton"}
                />
                <Gallery />
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default homePage;