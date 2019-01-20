import React from "react";
import { TouchableOpacity, ScrollView, Text } from "react-native";
import {
  Container,
  Content,
  Header,
  Footer,
  Title,
  Left,
  Right,
  Icon,
  Gallery,
  TitleSport,
  Video,
  Spinner,
} from "../../components";
import View from "../../components/content/Content.style";
import Feed from "../feedPage/components/Feed";
export interface VideoPageProps {
  openDrawer: () => void;
  data: any;
  error: any;
  loading: boolean;
}

class VideoPage extends React.PureComponent<VideoPageProps> {
  render() {
    const { error, loading, data } = this.props;

    if (error) {
      return (<Container>

        <Content color={"#000"}>

          <View
            style={{
              backgroundColor: "#000",
              marginTop: 30,
            }}
          >
            <Spinner size={30} danger name={"cog"} />
          </View>
        </Content>
      </Container>);
    }
    if (loading) {
      return (<Container>

        <Content color={"#000"}>

          <View
            style={{
              backgroundColor: "#000",
              marginTop: 30,
            }}
          >
            <Spinner size={30} danger name={"cog"} />
          </View>
        </Content>
      </Container>);
    }
    return (
      <Container>

        <Content full color={"#000"}>
          <View
            style={{
              backgroundColor: "#000",
              marginTop: 30,
            }}
          >
            <Video
              text={"Take a look back at all of the Premier League action from ma..."}
            />
          </View>
          {data.listFeeds && data.listFeeds.items && <Feed data={data.listFeeds.items} />}
        </Content>
      </Container>
    );
  }
}

export default VideoPage;
