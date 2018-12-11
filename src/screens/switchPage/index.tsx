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
  Switch
} from "../../components";

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
  openDrawer: any;
}

export interface IState {
  checked: Array<boolean>;
}

class switchPage extends Component<Props, IState> {
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
            <Switch/>          
          </View>
        </Content>
        <Footer>
          <Title>{"Footer"}</Title>
        </Footer>
      </Container>
    );
  }
}

export default switchPage;
