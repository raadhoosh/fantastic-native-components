import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Button } from "../../components";

export interface ButtonPageProps {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class ButtonPage extends React.PureComponent<ButtonPageProps> {
    constructor(props: ButtonPageProps) {
        super(props)
    }
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
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <Button primary width={'200px'} >Primary</Button>
                    <Button secondary width={'200px'} >Secondary</Button>
                    <Button success width={'200px'} >Success</Button>
                    <Button info width={'200px'} >Info</Button>
                    <Button warning width={'200px'} >Warning</Button>
                    <Button bgColor={"#9c27b0"} color="#fff" width={'200px'}
                        onPress={() => {
                            alert('You tapped the button!');
                        }}
                    >Press Me</Button>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20, marginBottom: 30 }}>
                    <Button primary width={'200px'} inverse >Primary And Inverse</Button>
                    <Button secondary width={'200px'} inverse >Secondary</Button>
                    <Button success width={'200px'} inverse >Success</Button>
                    <Button info width={'200px'} inverse >Info</Button>
                    <Button warning width={'200px'} inverse >Warning</Button>
                    <Button disabled width={'200px'} inverse >Disabled</Button>
                    <Button width={'200px'} inverse >Basic</Button>
                    <Button borderRadius={"10px"} width={'200px'}>BorderRadius</Button>
                    <Button borderRadius={"0"} bgColor="#ff0080" color="#fff" width={'200px'}>BorderRadius</Button>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default ButtonPage;