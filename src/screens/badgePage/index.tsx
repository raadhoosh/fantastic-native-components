import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Badge, Icon } from "../../components";

export interface BadgePageProps {
    openDrawer: () => void;
}
class BadgePage extends React.PureComponent<BadgePageProps> {
    constructor(props: BadgePageProps) {
        super(props)
    }
    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"BadgePage"}</Title>
                <Right>
                    <Text style={{ color: "#fff" }}>right</Text>
                </Right>
            </Header>
            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Badge primary>Primary</Badge>
                    <Badge secondary >Secondary</Badge>
                    <Badge success>Success</Badge>
                    <Badge info>Info</Badge>
                    <Badge warning>Warning</Badge>
                    <Badge backgroundColor={"#9c27b0"} color="#fff"
                    >backgroundColor</Badge>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20, marginBottom: 30 }}>
                    <Badge primary inverse >Primary And Inverse</Badge>
                    <Badge secondary inverse >Secondary</Badge>
                    <Badge success inverse >Success</Badge>
                    <Badge info inverse >Info</Badge>
                    <Badge warning inverse >Warning</Badge>
                    <Badge inverse >Basic</Badge>
                    <Badge borderRadius={10} width={100}>width</Badge>
                    <Badge borderRadius={0} backgroundColor="#ff0080" BorderColor="#ff0080">backgroundColor</Badge>
                    <Badge borderRadius={0} backgroundColor="#fff" color="#000">BorderRadius</Badge>
                    <Badge borderRadius={0} backgroundColor="#fff" color="#000" BorderColor="#9c27b0">BorderColor</Badge>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default BadgePage;