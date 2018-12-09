import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, Alert } from "react-native";
import { Container, Content, Header, Footer, Title, Left, Right, Text, Modal } from "../../components";

export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
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

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
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