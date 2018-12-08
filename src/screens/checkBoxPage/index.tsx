import React ,{Component} from "react";
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
  checked?: boolean;
}

class CheckBoxPage extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      checked: false
    };
    this.onChange = this.onChange.bind(this);
  }

  // onChange() {
  //   this.setState({
  //     checked: !this.state.checked
  //   })
  //   alert(this.state.checked)
  // }

  onChange(checked?: boolean) {
    this.setState({ checked: checked });
    alert("check")
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
            <CheckBox checked={true} secondary />
            <CheckBox
              checked={this.state.checked}
              onChange={() => {
                this.onChange(!this.state.checked);
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
