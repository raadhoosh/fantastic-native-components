import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Search } from "../../components";

export interface Props {
    openDrawer: any;
    onChangeText?: (text: string) => void;
}

export interface IState {
    value?: string;
    text?: string;
}

class SearchPage extends React.PureComponent<Props, IState> {

    constructor(props: Props) {
        super(props);

        this.state = {
            value: " "
        }

        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(value: string) {
        this.setState({ value })
    }

    render() {

        return (<Container>
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
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        placeholder={"primary"}
                        value={this.state.value}
                        primary
                        onChangeText={(value) => this.onChangeText(value)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        value={this.state.value}
                        secondary
                        onChangeText={(value) => this.onChangeText(value)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        value={this.state.value}
                        success
                        inverse
                        onChangeText={(value) => this.onChangeText(value)}
                    />
                </View>

                 <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        value={this.state.value}
                        success
                        borderRadius={50}
                        onChangeText={(value) => this.onChangeText(value)}
                    />
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default SearchPage;