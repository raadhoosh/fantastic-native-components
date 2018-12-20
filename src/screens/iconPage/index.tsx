import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Icon, Grid, Row, Col } from "../../components";
export interface Props {
    openDrawer: () => void;
}
class IconPage extends React.PureComponent<Props> {
    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                    <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"IconPage"}</Title>
                <Right>
                    <Icon type="FontAwesome" name="search" color={"#fff"}/>
                </Right>
            </Header>
            <Content>
                <Grid>
                    <Row>
                        <Col>
                            <Icon primary type="Ionicons" name="ios-home" />
                        </Col>
                        <Col>
                            <Icon size={33} primary type="Ionicons" name="ios-home" />
                        </Col>
                        <Col>
                            <Icon size={55} primary type="Ionicons" name="ios-home" />
                        </Col>
                    </Row>
                    <Row><Text>Social</Text></Row>
                    <Row><Text> </Text></Row>
                    <Row>
                        <Col><Icon info type="FontAwesome" name="facebook" /></Col>
                        <Col><Icon purple type="FontAwesome" name="telegram" /></Col>
                        <Col><Icon danger type="FontAwesome" name="instagram" /></Col>
                        <Col><Icon warning type="FontAwesome" name="whatsapp" /></Col>
                        <Col><Icon primary type="FontAwesome" name="weixin" /></Col>
                    </Row>
                    <Row><Text> </Text></Row>
                    <Row><Text>Code</Text></Row>
                    <Row><Text> </Text></Row>
                    <Row>
                        <Col><Icon info type="FontAwesome" name="bug" /></Col>
                        <Col><Icon purple type="FontAwesome" name="coffee" /></Col>
                        <Col><Icon danger type="FontAwesome" name="barcode" /></Col>
                        <Col><Icon warning type="FontAwesome" name="comments" /></Col>
                        <Col><Icon primary type="FontAwesome" name="terminal" /></Col>
                        <Col><Icon primary type="FontAwesome" name="user-secret" /></Col>
                    </Row>
                    <Row><Text> </Text></Row>
                    <Row><Text>Education</Text></Row>
                    <Row><Text> </Text></Row>
                    <Row>
                        <Col><Icon info type="FontAwesome" name="book" /></Col>
                        <Col><Icon danger type="FontAwesome" name="bell" /></Col>
                        <Col><Icon primary type="FontAwesome" name="graduation-cap" /></Col>
                        <Col><Icon primary type="FontAwesome" name="music" /></Col>
                    </Row>
                    <Row><Text> </Text></Row>
                    <Row><Text>Others</Text></Row>
                    <Row><Text> </Text></Row>
                    <Row>
                        <Col><Icon info type="FontAwesome" name="map" /></Col>
                        <Col><Icon danger type="FontAwesome" name="bed" /></Col>
                        <Col><Icon primary type="FontAwesome" name="bus" /></Col>
                        <Col><Icon primary type="FontAwesome" name="taxi" /></Col>
                    </Row>
                </Grid>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default IconPage;