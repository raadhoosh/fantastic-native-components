import * as React from "react";
import { Icon, Col, Row, Text, TitleSport, CardSport } from "../../../components";
import CardImage from "./CardImages";
import { ScrollView } from "react-native";
import View from "../../../components/content/Content.style";

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
                    return <View
                        style={{
                            backgroundColor: "#000",
                            marginTop: 30,
                        }} key={index}>
                        <TitleSport title={item.title} />

                        <ScrollView horizontal={true}
                            style={{
                                backgroundColor: "#000",
                            }}>
                            {
                                item.elements.map((element: any, key: number) => {
                                    return <CardSport
                                        key={"key" + key}
                                        primary
                                        source={{ uri: element.url }}
                                        title={element.title}
                                        titleColor={"#FF005A"}
                                        icon={"lock"}
                                        time={element.duration}
                                        live={element.type === "Live"}
                                        text={
                                            element.short_description
                                        }
                                    />;
                                })
                            }
                        </ScrollView>
                    </View>;
                })}
            </>
        );
    }
}

export default App;