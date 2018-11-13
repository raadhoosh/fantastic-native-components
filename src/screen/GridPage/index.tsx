import React from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Grid, Col, Row } from "../../components";
export interface Props {
    openDrawer: () => void;
}
class GridPage extends React.PureComponent<Props> {
    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Text>menu</Text>
                    </TouchableOpacity>
                </Left>
                <Title>{"Headers"}</Title>
                <Right>
                    <Text>right</Text>
                </Right>
            </Header>
            <Content full>
                <Grid style={{ flex: 1 , height: Dimensions.get("screen").height }}>
                    <Col style={{backgroundColor: "purple" }}>
                        <Text>1</Text>
                    </Col>
                    <Col>
                        <Row style={{backgroundColor: "blue" }}>
                            <Text>2</Text>
                        </Row>
                        <Row style={{backgroundColor: "yellow" }}>
                            <Text>3</Text>
                        </Row>
                    </Col>
                </Grid>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default GridPage;