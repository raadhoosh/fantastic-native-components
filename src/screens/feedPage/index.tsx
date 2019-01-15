import React from "react";
import { TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { Container, Content, Text, Header, Footer, Title, Left, Right, Icon, Accordion, Row, Col, CardImages, Button } from "../../components";
interface ObInterface {
    title: string;
    content: string;
}
const deviceWidth = Dimensions.get("window").width;

// tslint:disable:max-line-length
export interface Props {
    openDrawer: () => void;
    data?: any;
    error?: any;
    loading?: boolean;
}
class FeedPage extends React.PureComponent<Props> {
    render() {

        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"Optus Sport"}</Title>
                <Right>
                    <Icon type="FontAwesome" name="search" color={"#fff"} />
                </Right>
            </Header>
            <Content style={{ backgroundColor: "#010101" }} full>
                {this._renderSlider(this.props)}
                {this._renderGame(this.props)}
                {this._renderFeed(this.props)}
            </Content>
        </Container>);
    }
    private _renderSlider = ({ data, error, loading }: any) => {

        if (error) {
            return <Text danger>{"Error"}</Text>;
        }
        if (loading) {
            return <Text danger>{"loading"}</Text>;
        }
        if (data) {
            return <Col>
                <ScrollView
                    horizontal={true}
                    style={{ flex: 1, marginBottom: 20, height: 300 }}>
                    {data.sliders.map((item: any, index: any) => {
                        return <Row key={index} style={{ marginLeft: 12, marginRight: 12 }}>
                            <Image
                                style={{
                                    width: deviceWidth,
                                    height: 300,
                                }}
                                source={{ uri: item.url }}
                            />
                        </Row>;
                    })}
                </ScrollView>
            </Col>;
        }

        return <Text>{JSON.stringify(data)}</Text>;
    }

    private _renderGame = ({ data, error, loading }: any) => {

        if (error) {
            return <Text danger>{"Error"}</Text>;
        }
        if (loading) {
            return <Text danger>{"loading"}</Text>;
        }
        if (data) {
            return <Col>
                <ScrollView
                    horizontal={true}
                    style={{ flex: 1, marginBottom: 20 }}>
                    {data.games.map((item: any, index: any) => {
                        return <Row key={index} style={{ margin: 6, width: deviceWidth - 12 }}>
                            <Col>
                                <Row>
                                    <Col style={{
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Image
                                            style={{
                                                width: 80,
                                                height: 80,
                                            }}
                                            source={{ uri: item.image }}
                                        />
                                    </Col>
                                    <Col style={{
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                color: "#ccc",
                                            }}
                                            fontSize={44}
                                        >VS</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Image
                                            style={{
                                                width: 80,
                                                height: 80,
                                            }}
                                            source={{ uri: item.image2 }}
                                        />

                                    </Col>

                                </Row>
                                <Row style={{ marginTop: 5 }}>
                                    <Col style={{
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text
                                            style={{
                                                marginLeft: 24,
                                                color: "#ccc",
                                            }}
                                            fontSize={18}
                                        >{item.title}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text>{" "}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text
                                            style={{
                                                marginLeft: 24,
                                                color: "#ccc",
                                            }}
                                            fontSize={18}
                                        >{item.two_title}</Text>
                                    </Col>
                                </Row>
                                <Row style={{
                                    marginTop: 5,
                                    justifyContent: "center",
                                    textAlign: "center",
                                    alignItems: "center",
                                }}>
                                    <Button backgroundColor={"#2a2b2b"} style={{ padding: 6 }} width={"90%"} >{item.updateTime}</Button>
                                </Row>
                            </Col>

                        </Row>;
                    })}
                </ScrollView>
            </Col>;
        }

        return <Text>{JSON.stringify(data)}</Text>;
    }

    private _renderFeed = ({ data, error, loading }: any) => {

        if (error) {
            return <Text danger>{"Error"}</Text>;
        }
        if (loading) {
            return <Text danger>{"loading"}</Text>;
        }
        if (data) {
            return <>
                {data.feeds.map((item: any, index: any) => {
                    return <Col key={index}>
                        <Row>
                            <Text fontSize={18} secondary>{item.title}</Text>
                            <Text
                                style={{
                                    marginLeft: 24,
                                    color: "#ccc",
                                    marginTop: 3,
                                }}
                                fontSize={14}
                                secondary>{"VIEW ALL"}</Text>
                            <Icon style={{ marginLeft: 12 }} type="FontAwesome" name="angle-right" color={"#ccc"} />
                        </Row>
                        <ScrollView horizontal={true}
                            style={{
                                flex: 1,
                                marginTop: 20,
                                marginBottom: 30,
                                height: 250,
                            }}>
                            {
                                item.elements.map((element: any, key: number) => {
                                    return this._element(element, key);
                                })
                            }
                        </ScrollView>
                    </Col>;
                })}
            </>;
        }

        return <Text>{JSON.stringify(data)}</Text>;
    }

    private _element = (item: any, index: number) => {
        return <Row style={{ marginLeft: 12, marginRight: 12 }} key={index}>
            <CardImages
                borderColor={"#000"}
                source={{ uri: item.url }}
                primary
                titleColor={"#FF005A"}
                title={item.title}
                text={item.short_description}
                width={deviceWidth} height={250} />
        </Row>;
    }
}

export default FeedPage;