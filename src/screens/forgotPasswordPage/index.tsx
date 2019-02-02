import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {
  Container,
  Content,
} from "../../components";

import {
  ForgotPassword,
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
class forgotPasswordPage extends React.PureComponent<Props> {

  onChangeRout = (route: string) => {
    this.props.onChangeRout && this.props.onChangeRout(route);
  }

  render() {
    const { dataArray, expanded } = this.props;
    
    return (
      <Container>
        <HeaderSport />
        <Content full color={"#000"}>
          <ForgotPassword
            handleForgotPassword={() => this.onChangeRout("Login")}
          />
        </Content>
      </Container>
    );
  }
}

export default forgotPasswordPage;
