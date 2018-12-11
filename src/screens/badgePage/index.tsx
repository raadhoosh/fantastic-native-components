import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Badge } from "../../components";

export interface BadgePageProps {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
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
                    <Badge primary>Primary</Badge>
                    <Badge secondary >Secondary</Badge>
                    <Badge success>Success</Badge>
                    <Badge info>Info</Badge>
                    <Badge warning>Warning</Badge>
                    <Badge backgroundColor={"#9c27b0"} color="#fff"                       
                    >backgroundColor</Badge>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20, marginBottom: 30 }}>
                    <Badge primary width={'100px'} inverse >Primary And Inverse</Badge>
                    <Badge secondary width={'100px'} inverse >Secondary</Badge>
                    <Badge success width={'100px'} inverse >Success</Badge>
                    <Badge info width={'100px'} inverse >Info</Badge>
                    <Badge warning width={'100px'} inverse >Warning</Badge>                    
                    <Badge width={'100px'} inverse >Basic</Badge>
                    <Badge borderRadius={"10px"} width={'100px'}>BorderRadius</Badge>
                    <Badge borderRadius={"0"} backgroundColor="#ff0080" color="#fff" width={'100px'}>BorderRadius</Badge>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default BadgePage;