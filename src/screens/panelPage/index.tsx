import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Icon, Panel } from "../../components";
export interface Props {
    openDrawer: () => void;
}
class PanelPage extends React.PureComponent<Props> {
    render() {

        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" />
                    </TouchableOpacity>
                </Left>
                <Title>{"PanelPage"}</Title>
                <Right>
                    <Icon type="FontAwesome" name="search" />
                </Right>
            </Header>
            <Content>
                <Panel
                    primary
                    icon={<Icon color="#fff" type="FontAwesome" name="bell" />}
                    visible
                    title="Bell">
                    <View>
                        <Text>{"this is a Bell"}</Text>
                    </View>
                </Panel>
                <Panel
                    danger
                    icon={<Icon color="#fff" type="FontAwesome" name="exclamation-triangle" />}
                    visible
                    title="triangle">
                    <View>
                        <Text>{"this is a Triangle"}</Text>
                    </View>
                </Panel>
                <Panel
                    info
                    icon={<Icon type="FontAwesome" name="exclamation" />}
                    visible
                    title="exclamation">
                    <View>
                        <Text>{"this is an Exclamation"}</Text>
                    </View>
                </Panel>
                <Panel
                    dark
                    icon={<Icon color="#fff" type="FontAwesome" name="bell" />}
                    visible
                    title="Bell">
                    <View>
                        <Text>{"this is a Bell"}</Text>
                    </View>
                </Panel>
                <Panel
                    warning
                    icon={<Icon color="#fff" type="FontAwesome" name="exclamation-triangle" />}
                    visible
                    title="triangle">
                    <View>
                        <Text>{"this is a Triangle"}</Text>
                    </View>
                </Panel>
                <Panel
                    success
                    icon={<Icon type="FontAwesome" name="exclamation" />}
                    visible
                    title="exclamation">
                    <View>
                        <Text>{"this is an Exclamation"}</Text>
                    </View>
                </Panel>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default PanelPage;