import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import {
  Container,
  Content,
  Header,
  Footer,
  Title,
  Left,
  Right,
  Icon,
  Accordion,
  Gallery,
  Slideshow,
  Game
} from "../../components";
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
    return (
      <Container>
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
          <ScrollView
            horizontal={true}
            style={{
              backgroundColor: "#000",
              paddingLeft: 12,
              paddingRight: 12
            }}
          >
            <Game
              primary
              fontSize={24}
              title={"Tailored Jeans"}
              sourceLleft={require("./game.png")}
              sourceRight={require("./img.png")}
              textLeft={"Southampton"}
              textRight={"Brighton"}
            />
            <Game
              primary
              fontSize={24}
              title={"Tailored Jeans"}
              sourceRight={require("./img.png")}
              sourceLleft={require("./game.png")}
              textLeft={"Southampton"}
              textRight={"Brighton"}
            />
            <Game
              primary
              fontSize={24}
              title={"Tailored Jeans"}
              sourceRight={require("./img.png")}
              sourceLleft={require("./game.png")}
              textLeft={"Southampton"}
              textRight={"Brighton"}
            />
          </ScrollView>

          <Gallery />
        </Content>
        <Footer>
          <Title>{"Footer"}</Title>
        </Footer>
      </Container>
    );
  }
}

export default homePage;
