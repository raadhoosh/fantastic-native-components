import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, TextInput } from "../../components";

export interface Props {
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
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <TextInput width={'200px'} backgroundColor={"#ddd"} placeholder={"Type here to translate!"} />
                    <TextInput primary width={'200px'} placeholder={"primary"} />
                    <TextInput secondary width={'200px'} placeholder={"secondary"} />
                    <TextInput success width={'200px'} placeholder={"success"} placeholderTextColor={"#618833"} />
                    <TextInput info width={'200px'} />
                    <TextInput danger width={'200px'}
                        placeholder={"Handling Text Input"}
                        onChangeText={() => alert('Handling Text Input')}
                    />
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default GridPage;