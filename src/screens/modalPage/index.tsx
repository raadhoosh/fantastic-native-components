import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, Alert } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Modal, Icon } from "../../components";

export interface Props {
    openDrawer: () => void;
}

export interface IState {
    modalVisible?: boolean;
}

class ModalPage extends Component<Props, IState> {
    constructor(props: Props) {
        super(props)
        this.state = {
            modalVisible: false,
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }
    setModalVisible(visible?: boolean) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                    <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"ModalPage"}</Title>
                <Right>
                <Text style={{ color: "#fff" }}>right</Text>
                </Right>
            </Header>
            <Content>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 30 }}>

                    <Modal
                        primary
                        iconColor="#fff"
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        title={"Title"}
                        hasClose                               
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight >                               
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>

                    </Modal>

                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text>Show Modal</Text>
                    </TouchableHighlight>
                </View>
            </Content>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default ModalPage;