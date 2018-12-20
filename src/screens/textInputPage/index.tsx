import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, TextInput, Icon } from "../../components";

export interface Props {
    openDrawer: () => void;
}
class TextInputPage extends React.PureComponent<Props> {
    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"TextInputPage"}</Title>
                <Right>
                    <Text style={{ color: "#fff" }}>right</Text>
                </Right>
            </Header>
            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <TextInput width={'200px'} placeholder={"Type here to translate!"} />
                    <TextInput primary width={'200px'} placeholder={"primary"} />
                    <TextInput secondary width={'200px'} placeholder={"secondary"} />
                    <TextInput success width={'200px'} placeholder={"success"} placeholderTextColor={"#618833"} />
                    <TextInput info width={'200px'} />
                    <TextInput success inverse borderRadius="0" width={'200px'} />
                    <TextInput backgroundColor="#f2f2f2" color="#6c757d" borderColor="transparent" borderRadius="0" inverse width={'200px'} />
                    <TextInput danger placeholderTextColor="#f44336" width={'200px'}
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

export default TextInputPage;