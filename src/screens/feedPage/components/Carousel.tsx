import * as React from "react";
import { ScrollView, Image, Dimensions, Text } from "react-native";
import { Col, Row } from "../../../components";

const deviceWidth = Dimensions.get("window").width;
type Item = {
    id: string;
    title: string;
    type: string;
    short_description: string;
    url: string;
};
interface ICarouselProps {
    data: Array<Item>;
}
export class App extends React.PureComponent<ICarouselProps> {
    render() {
        const { data } = this.props;

        return (
            <Col>
                <ScrollView
                    horizontal={true}
                    style={{ flex: 1, marginBottom: 20, height: 300 }}>
                    {data.map((item: any, index: any) => {
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
            </Col>
        );
    }
}

export default App;