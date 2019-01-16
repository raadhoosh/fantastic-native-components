import * as React from "react";
import { Row, CardImages } from "../../../components";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width - 70;
type Item = {
    id: string;
    title: string;
    type: string;
    short_description: string;
    short_content ?: string;
    duration ?: string;
    url: string;
};
interface IProps {
    item: Item;
}
class App extends React.PureComponent<IProps> {
    render() {
        const { item } = this.props;
        return (
            <Row style={{ marginLeft: 12, marginRight: 12 }} >
                <CardImages
                    borderColor={"#000"}
                    source={{ uri: item.url }}
                    primary
                    titleColor={"#FF005A"}
                    title={item.title}
                    text={item.short_description}
                    width={deviceWidth} height={250} />
            </Row>
        );
    }
}

export default App;