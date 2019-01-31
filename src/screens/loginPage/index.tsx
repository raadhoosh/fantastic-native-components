import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Content,  
} from "../../components";

import {
  Login,
  HeaderSport
} from "../../sportComponents";

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
        <HeaderSport />
        <Content full color={"#000"}>
          <Login />
        </Content>      
      </Container>
    );
  }
}

export default LoginPage;
