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
  Radio,
  Icon
} from "../../components";

export interface Props {
  openDrawer: () => void;
}

export interface IState {
  checked: Array<boolean>;
}

class radioPage extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: Array.apply(null, new Array(8)).map(() => true)
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
          <Title>{"radioPage"}</Title>
          <Right>
            <Text style={{ color: "#fff" }}>right</Text>
          </Right>
        </Header>
        <Content>
          <View
            style={{
              flex: 1,
              marginTop: 30,
              marginLeft: 30,
            }}
          >
            <Radio label="primary" checked={true} primary />
            <Radio
              label="secondary"
              checked={this.state.checked[0]}
              onPress={() => {
                this.handleCheck(0);
              }}
              secondary
            />
            <Radio
              label="success"
              checked={this.state.checked[1]}
              onPress={() => {
                this.handleCheck(1);
              }}
              success
            />
            <Radio
              label="warning"
              checked={this.state.checked[2]}
              onPress={() => {
                this.handleCheck(2);
              }}
              warning
            />
            <Radio
              disabled
              label="disabled"
              checked={this.state.checked[3]}
              onPress={() => {
                this.handleCheck(3);
              }}
            />
            <Radio
              label="color"
              color="#9c27b0"
              checked={this.state.checked[4]}
              onPress={() => {
                this.handleCheck(4);
              }}
            />
            <Radio
              label="textColor"
              textColor="#9c27b0"
              checked={this.state.checked[5]}
              onPress={() => {
                this.handleCheck(5);
              }}
            />
            <Radio
              label="danger"
              danger
              checked={this.state.checked[6]}
              onPress={() => {
                this.handleCheck(6);
              }}
            />
            <Radio
              label="fontSize"
              success
              fontSize={12}
              checked={this.state.checked[7]}
              onPress={() => {
                this.handleCheck(7);
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

export default radioPage;
