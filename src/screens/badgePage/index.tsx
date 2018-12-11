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
                    <Badge primary inverse >Primary And Inverse</Badge>
                    <Badge secondary inverse >Secondary</Badge>
                    <Badge success inverse >Success</Badge>
                    <Badge info inverse >Info</Badge>
                    <Badge warning  inverse >Warning</Badge>                    
                    <Badge inverse >Basic</Badge>
                    <Badge borderRadius={10} width={100}>width</Badge>
                    <Badge borderRadius={0} backgroundColor="#ff0080" color="#fff" width={'100px'}>BorderRadius</Badge>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default BadgePage;