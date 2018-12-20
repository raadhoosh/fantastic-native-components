import React from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Tab, Col, Row } from "../../components";
import View from "../../components/content/Content.style";

export interface Props {
    openDrawer: () => void;
}

class TabPage extends React.PureComponent<Props> {
    render() {
        const dataTabs = [
            {
                id: 1,
                title: "First tab title",
                content: "First tab content"
            },
            {
                id: 2,
                title: "Second tab title",
                content: "Second tab content"
            },
            {
                id: 3,
                title: "Third tab title",
                content: "Third tab content"
            }
        ]

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
            <Content full>
                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab
                        primary
                        currentTab={0}
                        dataTabs={dataTabs}
                    />
                </View>
                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab
                        secondary
                        currentTab={1}
                        dataTabs={dataTabs}
                    />
                </View>
                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab
                        success
                        currentTab={2}
                        dataTabs={dataTabs}
                    />
                </View>

                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab
                        danger
                        currentTab={0}
                        dataTabs={dataTabs}
                    />
                </View>
                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab
                        success
                        inverse
                        currentTab={0}
                        dataTabs={dataTabs}
                    />
                </View>

                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab
                        primary
                        inverse
                        currentTab={0}
                        dataTabs={dataTabs}
                    />
                </View>

                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab                        
                        inverse
                        currentTab={0}
                        dataTabs={dataTabs}
                    />
                </View>

                <View style={{ marginTop: 30, marginBottom: 20 }}>
                    <Tab
                        success
                        disabled
                        currentTab={0}
                        dataTabs={dataTabs}
                    />
                </View>

            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default TabPage;