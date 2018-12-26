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
  modalShown: Array<boolean>;
  message: string;
}

class ToastPage extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalShown: Array.apply(null, new Array(10)).map(() => false),
      message: ""
    };

    this.callToast = this.callToast.bind(this);
  }

  callToast(type: string, i: number) {
    const newArray = this.state.modalShown.map((element: boolean, index: number) => { return index === i ? !element : false; });
    this.setState({
      modalShown: newArray,
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
        <Toast primary message={"primary"} modalShown={this.state.modalShown[0]} />
        <Toast secondary message={"secondary"} modalShown={this.state.modalShown[1]} />
        <Toast success message={"success"} modalShown={this.state.modalShown[2]} />
        <Toast danger message={"danger"} modalShown={this.state.modalShown[3]} />
        <Toast danger inverse message={"inverse"} modalShown={this.state.modalShown[4]} />

        <View style={{ padding: 20 }}>
          <View style={{ marginTop: 100 }}>
            <Button onPress={() => this.callToast('primary', 0)} primary >primary Toast</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button onPress={() => this.callToast('secondary', 1)} secondary >secondary Toast</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button onPress={() => this.callToast('success', 2)} success >success Toast</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button onPress={() => this.callToast('danger', 3)} danger >danger Toast</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button onPress={() => this.callToast('inverse', 4)} danger inverse >inverse Toast</Button>
          </View>
        </View>

      </Container>
    );
  }
}

export default ToastPage;
