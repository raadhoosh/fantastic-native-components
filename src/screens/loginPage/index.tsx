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
  onChangeRout: (route: string) => void;
  dataArray: Array<ObInterface>;
  expanded: number;
  navigation: any;
}

class LoginPage extends React.PureComponent<Props> {

  onChangeRout = (route: string) => {
    this.props.onChangeRout && this.props.onChangeRout(route);
  }

  render() {
    const { dataArray, expanded } = this.props;

    return (
      <Container>
        <HeaderSport
          navigation={this.props.navigation}
        />
        <Content full color={"#000"}>
          <Login
            handleForgotPassword={() => this.onChangeRout("ForgotPassword")}
          />
        </Content>
      </Container>
    );
  }
}

export default LoginPage;
