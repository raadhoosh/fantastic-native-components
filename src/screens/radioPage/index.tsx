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
  Radio
} from "../../components";

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
  openDrawer: any;
}

export interface IState {
  checked: Array<boolean>;
}

class radioPage extends Component<Props, IState, Array<boolean>> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: new Array(7).fill(true)
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
              marginTop: 30,
              marginLeft: 30,
            }}
          >
            <Radio label="primary" checked={true} primary />
            <Radio
              label="secondary"
              checked={this.state.checked[0]}
              onChange={() => {
                this.handleCheck(0);
              }}
              secondary
            />
            <Radio
              label="success"
              checked={this.state.checked[1]}
              onChange={() => {
                this.handleCheck(1);
              }}
              success
            />
            <Radio
              label="warning"
              checked={this.state.checked[2]}
              onChange={() => {
                this.handleCheck(2);
              }}
              warning
            />
            <Radio
              disabled
              label="disabled"
              checked={this.state.checked[3]}
              onChange={() => {
                this.handleCheck(3);
              }}
            />
            <Radio
              label="color"
              color="#9c27b0"
              checked={this.state.checked[4]}
              onChange={() => {
                this.handleCheck(4);
              }}
            />
            <Radio
              label="textColor"              
              textColor="#9c27b0"
              checked={this.state.checked[5]}
              onChange={() => {
                this.handleCheck(5);
              }}
            />
            <Radio
              label="danger"
              danger              
              checked={this.state.checked[6]}
              onChange={() => {
                this.handleCheck(6);
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
