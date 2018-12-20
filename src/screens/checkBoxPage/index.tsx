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
  CheckBox,
  Icon
} from "../../components";

export interface Props {
  openDrawer: () => void;
}

export interface IState {
  checked: Array<boolean>;
}

class CheckBoxPage extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: Array.apply(null, new Array(5)).map(() => true)
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(i: number) {
    const newArray = this.state.checked.map((element: boolean, index: number) => { return index === i ? !element : true; });
    this.setState({
      checked: newArray
    });
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
          <Title>{"CheckBoxPage"}</Title>
          <Right>
            <Text style={{ color: "#fff" }}>right</Text>
          </Right>
        </Header>
        <Content>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <CheckBox checked={true} primary />
            <CheckBox

              checked={this.state.checked[0]}
              onPress={() => {
                this.handleCheck(0);
              }}
              secondary
            />
            <CheckBox
              checked={this.state.checked[1]}
              onPress={() => {
                this.handleCheck(1);
              }}
              success
            />
            <CheckBox
              checked={this.state.checked[2]}
              onPress={() => {
                this.handleCheck(2);
              }}
              warning
            />
            <CheckBox
              disabled
              checked={this.state.checked[3]}
              onPress={() => {
                this.handleCheck(3);
              }}
            />
            <CheckBox
              backgroundColor="#9c27b0"
              checked={this.state.checked[4]}
              height={30}
              width={30}
              onPress={() => {
                this.handleCheck(4);
              }}
            />
          </View>
        </Content>
        <Footer>
          <Title>{"Footer"}</Title>
        </Footer>
      </Container>
    );
  }
}

export default CheckBoxPage;
