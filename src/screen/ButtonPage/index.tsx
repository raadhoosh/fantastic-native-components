import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Button } from "../../components";

export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
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
            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                    <Button primary width={'200px'} >primary</Button>
                    <Button secondary width={'200px'} >secondary</Button>
                    <Button success width={'200px'} >success</Button>
                    <Button info width={'200px'} >info</Button>
                    <Button warning width={'200px'} >warning</Button>
                    <Button bgColor={"#9c27b0"} width={'200px'}
                        onPress={() => {
                            alert('You tapped the button!');
                        }}
                    >Press Me</Button>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                    <Button primary width={'200px'} inverse >primary</Button>
                    <Button secondary width={'200px'} inverse >secondary</Button>
                    <Button success width={'200px'} inverse >success</Button>
                    <Button info width={'200px'} inverse >info</Button>
                    <Button warning width={'200px'} inverse >warning</Button>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default GridPage;