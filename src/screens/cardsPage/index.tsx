import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, CardImages } from "../../components";

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
                <View style={{ flex: 1, justifyContent: "center", marginTop: 30 }}>
                    <Text fontSize={20} style={{ marginBottom: 15 }}>Card Images</Text>
                    <CardImages
                    width={200}
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."}
                    />
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default BadgePage;