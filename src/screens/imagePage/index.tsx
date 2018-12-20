import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Image, Icon } from "../../components";

export interface Props {    
    openDrawer: any;
}

class ImagePage extends React.PureComponent<Props> {
    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                    <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"ImagePage"}</Title>
                <Right>
                <Text style={{ color: "#fff" }}>right</Text>
                </Right>
            </Header>
            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Image source={require('./img_avatar3.png')} style={{ width: 200, height: 200, marginBottom: 20 }} />
                    <Image borderRadius={500} source={{ uri: 'https://www.w3schools.com/howto/img_avatar2.png' }}
                        style={{ width: 200, height: 200 }} />
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default ImagePage;