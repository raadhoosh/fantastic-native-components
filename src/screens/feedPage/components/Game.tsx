import * as React from "react";
import { ScrollView, Dimensions, Image } from "react-native";
import { Text, Col, Row, Button } from "../../../components";
const deviceWidth = Dimensions.get("window").width - 70;
type Item = {
    id: string;
    title: string;
    two_title: string;
    updateTime: string;
    categoryTitle: string;
    description: string;
    imageUrl: string;
    publish: string;
    image: string;
    image2: string;
    published: boolean;
};
interface IGameProps {
    data: Array<Item>;
}
export class App extends React.PureComponent<IGameProps> {
    render() {
        const { data } = this.props;
        return (
            <Col>
                <ScrollView
                    horizontal={true}
                    style={{ flex: 1, marginBottom: 20 }}>
                    {data.map((item: any, index: any) => {
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
                                            numberOfLines={1}
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
                                        flex: 2,
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                marginLeft: 24,
                                                color: "#ccc",
                                            }}
                                            fontSize={18}
                                        >{item.title}</Text>
                                    </Col>
                                    <Col style={{
                                        flex: 1,
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text>{" "}</Text>
                                    </Col>
                                    <Col style={{
                                        flex: 2,
                                        justifyContent: "center",
                                        textAlign: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text
                                            numberOfLines={1}
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
            </Col>
        );
    }
}

export default App;