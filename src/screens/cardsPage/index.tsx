import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, CardImages } from "../../components";

export interface CardImagesPageProps {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class CardImagesPage extends React.PureComponent<CardImagesPageProps> {
    constructor(props: CardImagesPageProps) {
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
                        primary
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans."}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "center", marginTop: 30 }}>
                    <CardImages
                        secondary
                        width={200}
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum."}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "center", marginTop: 30 }}>
                    <CardImages
                        success
                        width={200}
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum."}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "center", marginTop: 30 }}>
                    <CardImages
                        width={200}
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum."}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "center", marginTop: 30 }}>
                    <CardImages
                        center
                        width={200}
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum."}
                    />
                </View>

                <View style={{ flex: 1, justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
                    <CardImages
                        fontSize={24}
                        titleColor={"#f00"}
                        width={200}
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum."}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
                    <CardImages
                        fontSize={24}
                        titleColor={"#9c27b0"}
                        borderColor={"transparent"}
                        width={200}
                        center
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum."}
                    />
                </View>

                <View style={{ flex: 1, justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
                    <CardImages
                        fontSize={24}
                        titleColor={"#ff0080"}
                        imageHeight={250}                        
                        borderColor={"transparent"}                        
                        center
                        title={"Tailored Jeans"}
                        source={require('./img_avatar3.png')}
                        text={"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum."}
                    />
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default CardImagesPage;