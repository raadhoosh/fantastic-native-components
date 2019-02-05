import React from "react";
import {
  Container,
  Content,
} from "../../components";

import {
  ForgotPassword,
  HeaderSport,
} from "../../sportComponents";

interface ObInterface {
  title: string;
  content: string;
}
export interface Props {
  onChangeRout: (route: string) => void;
  navigation: any;
  theme: any;
}
class ForgotPasswordPage extends React.PureComponent<Props> {

  onChangeRout = (route: string) => {
    // tslint:disable-next-line:no-unused-expression
    this.props.onChangeRout && this.props.onChangeRout(route);
  }

  render() {

    return (
      <Container>
        <HeaderSport navigation={this.props.navigation} />
        <Content full color={"#000"}>
          <ForgotPassword
            theme={this.props.theme}
            handleForgotPassword={() => this.onChangeRout("Login")}
          />
        </Content>
      </Container>
    );
  }
}

export default ForgotPasswordPage;
