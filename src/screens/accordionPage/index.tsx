import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Icon, Grid, Row, Col, Accordion } from "../../components";
interface ObInterface {
    title: string;
    content: string;
}
export interface Props {
    openDrawer: () => void;
    dataArray: Array<ObInterface>;
    expanded: number;
}
class AccordionPage extends React.PureComponent<Props> {
    render() {
        const { dataArray, expanded } = this.props;
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" />
                    </TouchableOpacity>
                </Left>
                <Title>{"AccordionPage"}</Title>
                <Right>
                    <Icon type="FontAwesome" name="search" />
                </Right>
            </Header>
            <Content>
                <Accordion
                    dark
                    dataArray={dataArray}
                    expanded={expanded} />
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default AccordionPage;