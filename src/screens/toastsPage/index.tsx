import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Header,
  Footer,
  Title,
  Left,
  Right,
  Text,
  Toast,
  Icon,
  Button
} from "../../components";

export interface Props {
  openDrawer: () => void;
}

export interface IState {
  checked: Array<boolean>;
  modalShown: boolean;
  message: string;
}

class ToastPage extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: Array.apply(null, new Array(5)).map(() => true),
      modalShown: false,
      message: ""
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.callToast = this.callToast.bind(this);
  }

  handleCheck(i: number) {
    const newArray = this.state.checked.map((element: boolean, index: number) => { return index === i ? !element : true; });
    this.setState({
      checked: newArray,
    });
  }

  callToast(type: string) {
    this.setState({
      modalShown: true,
      message: type,
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={this.props.openDrawer}>
              <Icon type="Ionicons" name="md-menu" color={"#fff"} />
            </TouchableOpacity>
          </Left>
          <Title>{"ToastPage"}</Title>
          <Right>
            <Text style={{ color: "#fff" }}>right</Text>
          </Right>
        </Header>

        <Content>
          <Toast {...this.props} message={this.state.message} modalShown={this.state.modalShown} />
          <View style={{ marginTop: 100 }}>
            <Button onPress={() => this.callToast('primary')} primary >primary Toast</Button>
          </View>
          <View style={{ marginTop: 100 }}>
            <Button onPress={() => this.callToast('secondary')} secondary >secondary Toast</Button>
          </View>
        </Content>
        <Footer>
          <Title>{"Footer"}</Title>
        </Footer>
      </Container>
    );
  }
}

export default ToastPage;
