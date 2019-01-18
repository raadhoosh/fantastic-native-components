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
  Game,
  CardSport,
  TitleSport
} from "../../components";
import View from "../../components/content/Content.style";
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
        <Content full color={"#000"}>
          <Slideshow />
          <ScrollView
            horizontal={true}
            style={{
              backgroundColor: "#000"
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

          <View
            style={{
              backgroundColor: "#000",
              marginTop: 30,
            }}
          >
            <TitleSport title={"Upcoming Matches"} />
            <ScrollView
              horizontal={true}
              style={{
                backgroundColor: "#000"
              }}
            >
              <CardSport
                primary
                source={require("./card.jpg")}
                title={"Mini Match: Manchester City v Wolverhampton"}
                titleColor={"#FF005A"}
                icon={"lock"}
                time={"01:52"}
                live={"LIVE"}
                text={
                  "If you’re short on time, catch up on the action with this mi..."
                }
              />
              <CardSport
                primary
                source={require("./card.jpg")}
                title={"Mini Match: Manchester City v Wolverhampton"}
                titleColor={"#FF005A"}
                time={"01:52"}
                text={
                  "If you’re short on time, catch up on the action with this mi..."
                }
              />
              <CardSport
                primary
                source={require("./card.jpg")}
                title={"Mini Match: Manchester City v Wolverhampton"}
                titleColor={"#FF005A"}
                live={"LIVE"}
                time={"01:52"}
                text={
                  "If you’re short on time, catch up on the action with this mi..."
                }
              />
            </ScrollView>
          </View>
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
