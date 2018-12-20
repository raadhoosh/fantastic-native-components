import React from "react";
import { View, TouchableOpacity ,Image } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, List, Icon } from "../../components";

export interface Props {
    openDrawer: () => void;
}

class ListPage extends React.PureComponent<Props> {

    render() {

        const dataSource = [
            {
                id: 0,
                text: 'Ben',
                source: require('./img_avatar3.png')
            },
            {
                id: 1,
                text: 'Susan',
                source: require('./img_avatar3.png')
            },
            {
                id: 2,
                text: 'Robert',
                source: require('./img_avatar3.png')
            },
            {
                id: 3,
                text: 'Mary',
                source: require('./img_avatar3.png')
            }
        ]

        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                    <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"ListPage"}</Title>
                <Right>
                <Text style={{ color: "#fff" }}>right</Text>
                </Right>
            </Header>
            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <List borderRadius={50} dataSource={dataSource} />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
                    <List backgroundColor={"#eee"}  dataSource={dataSource} borderColor={"transparent"}/>
                </View>
                
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default ListPage;