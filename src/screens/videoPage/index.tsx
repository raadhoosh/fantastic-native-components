import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
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
  Video
} from "../../components";
import View from "../../components/content/Content.style";

export interface VideoPageProps {
  openDrawer: () => void;
}

class VideoPage extends React.PureComponent<VideoPageProps> {
  render() {

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
            text={"sport football"}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default VideoPage;
