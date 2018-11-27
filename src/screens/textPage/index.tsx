import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text } from "../../components";

export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}

class TextPage extends React.PureComponent<Props> {
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
                    <Text primary >This text represents primary.</Text>
                    <Text secondary >This text represents secondary.</Text>
                    <Text success >This text represents success.</Text>
                    <Text info >This text represents info.</Text>
                    <Text color="#f00" fontSize={18} >This text represents props color.</Text>
                    <Text fontWeight={"900"} >This text represents props color.</Text>
                    <Text fontWeight={"normal"} textAlign="center" >This text represents props fontWeight.</Text>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default TextPage;