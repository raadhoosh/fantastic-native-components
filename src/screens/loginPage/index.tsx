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
  Login
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
class LoginPage extends React.PureComponent<Props> {
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
          <Login />        
        </Content>
        <Footer>
          <Title>{"Footer"}</Title>
        </Footer>
      </Container>
    );
  }
}

export default LoginPage;
