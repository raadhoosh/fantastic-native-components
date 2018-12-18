import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Tab } from "../../components";

export interface TabPageProps {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class TabPage extends React.PureComponent<TabPageProps> {
    constructor(props: TabPageProps) {
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
                   
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20, marginBottom: 30 }}>
                    
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default TabPage;