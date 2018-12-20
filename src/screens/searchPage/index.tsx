import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Search, Icon } from "../../components";

export interface Props {
    openDrawer: () => void;
}

export interface IState {
    value: Array<string>;
}

class SearchPage extends React.PureComponent<Props, IState> {

    constructor(props: Props) {
        super(props);

        this.state = {
            value: Array.apply(null, new Array(5)).map(() => " ")
        }

        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(value: string, i: number) {

        const newArray = this.state.value.map((element: string, index: number) => { return index === i ? value : " "; });

        this.setState({
            value: newArray
        })
    }

    render() {

        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"SearchPage"}</Title>
                <Right>
                    <Text style={{ color: "#fff" }}>right</Text>
                </Right>
            </Header>

            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        placeholder={"primary"}
                        value={"value"}
                        primary
                        onChangeText={(value) => this.onChangeText(value, 0)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        value={this.state.value[1]}
                        secondary
                        onChangeText={(value) => this.onChangeText(value, 1)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        value={this.state.value[2]}
                        success
                        inverse
                        onChangeText={(value) => this.onChangeText(value, 2)}
                    />
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        value={this.state.value[3]}
                        success
                        borderRadius={50}
                        onChangeText={(value) => this.onChangeText(value, 3)}
                    />
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Search
                        placeholder={"backgroundColor"}
                        value={this.state.value[4]}
                        backgroundColor={"#f00"}
                        color={"#fff"}
                        borderRadius={50}
                        onChangeText={(value) => this.onChangeText(value, 4)}
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