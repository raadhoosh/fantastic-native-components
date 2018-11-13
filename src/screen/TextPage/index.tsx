import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text } from "../../components";

export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class GridPage extends React.PureComponent<Props> {
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
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text color='#f00' >This text represents props color.</Text>
                    <Text primary >This text represents primary.</Text>
                    <Text secondary >This text represents secondary.</Text>
                    <Text success >This text represents success.</Text>
                    <Text info >This text represents info.</Text>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default GridPage;