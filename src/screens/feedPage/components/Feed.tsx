import * as React from "react";
import { Icon, Col, Row, Text } from "../../../components";
import CardImage from "./CardImages";
import { ScrollView } from "react-native";

type Item = {
    id: string;
    title: string;
    type: string;
    short_description: string;
    url: string;
};
interface IFeedProps {
    data: Array<Item>;
}
export class App extends React.PureComponent<IFeedProps> {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.map((item: any, index: any) => {
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
                                    return <CardImage item={element} key={key} />;
                                })
                            }
                        </ScrollView>
                    </Col>;
                })}
            </>
        );
    }
}

export default App;