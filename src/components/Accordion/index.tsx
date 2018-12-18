import * as React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Icon } from "..";
import { Panel } from "..";
type IStyle = ViewStyle | object | Array<ViewStyle>;
interface ObInterface {
    title: string;
    content: string;
}
type Props = {
    dataArray: Array<ObInterface>;
    expanded: number;
    icon?: JSX.Element;
    expandedIcon?: JSX.Element;
    header?: JSX.Element | JSX.Element[];
    body?: JSX.Element | JSX.Element[];
    styledContent?: IStyle;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    dark?: boolean;
    backgroundColor?: string;
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        margin: 10,
        overflow: "hidden",
    },
    titleContainer: {
        flexDirection: "row",
    },
    title: {
        flex: 1,
        padding: 10,
        color: "#2a2f43",
        fontWeight: "bold",
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25,
    },
    body: {
        padding: 10,
        paddingTop: 0,
    },
});
interface State {
    visible: number;
}
class Accordion extends React.Component<Props, State> {
    icons: {
        "up": JSX.Element; "down": JSX.Element;
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            visible: props.expanded,
        };
        this.icons = {
            "up": <Icon color="#fff" type="FontAwesome" name="sort-up" />,
            "down": <Icon color="#fff" type="FontAwesome" name="sort-down" />,
        };
    }
    toggle = (index: number) => () => {
        this.setState({ visible: index });
    }
    renderIcon = (key: number) => {
        const { icon } = this.props;
        let elmIcon = icon || this.icons.down;
        if (this.state.visible === key) {
            elmIcon = this.icons.up;
        }
        return elmIcon;
    }
    renderBody = (item: ObInterface, key: number) => {
        if (this.state.visible === key) {
            return <View>
                <Text>{item.content}</Text>
            </View>;
        }
        return <Text>{""}</Text>;
    }

    render() {
        const { dataArray, icon, expandedIcon, expanded, ...others } = this.props;
        return (<React.Fragment  >
            {dataArray.map((item, index) => (
                <Panel
                    {...others}
                    icon={this.renderIcon(index)}
                    key={index}
                    visible={this.state.visible === index}
                    title={item.title}
                    toggle={this.toggle(index)}
                >
                    {this.renderBody(item, index)}

                </Panel>
            ))}

        </React.Fragment>);
    }
}

export default Accordion;