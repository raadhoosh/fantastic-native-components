import * as React from "react";
import { ScrollView } from "react-native";
import { Game } from "../../../components";

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
            <ScrollView
                horizontal={true}
                style={{
                    backgroundColor: "#000",
                }} >
                {data.map((item: Item, index: any) => {
                    return <Game
                        key={index}
                        primary
                        fontSize={24}
                        title={item.updateTime}
                        sourceLeft={{ uri: item.image }}
                        sourceRight={{ uri: item.image2 }}
                        textLeft={item.title}
                        textRight={item.two_title}
                    />;
                })}

            </ScrollView>
        );
    }
}

export default App;