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
  CheckBox
} from "../../components";

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
  openDrawer: any;
}

export interface IState {
  checked: Array<boolean>;
}

class CheckBoxPage extends Component<Props, IState, Array<boolean>> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: new Array(5).fill(true)
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(i: number) {
    const newArray = this.state.checked.map((element, index) => {
      return index === i ? !element : true;
    });
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
              <Text>menu</Text>
            </TouchableOpacity>
          </Left>
          <Title>{"Headers"}</Title>
          <Right>
            <Text>right</Text>
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
            <CheckBox label="primary" checked={true} primary />
            <CheckBox
              label="secondary"
              checked={this.state.checked[0]}
              onChange={() => {
                this.handleCheck(0);
              }}
              secondary
            />
            <CheckBox
              label="secondary"
              checked={this.state.checked[1]}
              onChange={() => {
                this.handleCheck(1);
              }}
              success
            />
            <CheckBox
              label="secondary"
              checked={this.state.checked[2]}
              onChange={() => {
                this.handleCheck(2);
              }}
              warning
            />
            <CheckBox
              disabled
              checked={this.state.checked[3]}
              onChange={() => {
                this.handleCheck(3);
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
