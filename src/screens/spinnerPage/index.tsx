import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Header, Footer, Title, Left, Right, Text, Spinner, Icon } from "../../components";
import SpinnerImg from "../../components/spinner/spinerImg"

export interface Props {
    openDrawer: () => void;
}
class SpinnerPage extends React.PureComponent<Props> {
    render() {
        return (<Container>
            <Header>
                <Left>
                    <TouchableOpacity onPress={this.props.openDrawer}>
                        <Icon type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Title>{"SpinnerPage"}</Title>
                <Right>
                    <Text style={{ color: "#fff" }}>right</Text>
                </Right>
            </Header>
            <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
                <View style={{ marginTop: 10 }}>
                    <Spinner primary size={30} name="refresh" />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Spinner secondary name="circle-o-notch" />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Spinner danger name={"spinner"} />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Spinner warning name={"cog"} />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Spinner info name={"spinner"} size={40} />
                </View>
                <View style={{ marginTop: 60 }}>
                    <Spinner success name="circle-o-notch" size={50} />
                </View>
                <View style={{ marginTop: 60 }}>
                    <SpinnerImg source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                        width={227}
                        height={200}
                    />
                </View>
                <View style={{ marginTop: 60, marginRight: 80 }}>
                    <SpinnerImg source={require('../../components/spinner/icons/icons8-godtier-48.png')}
                        width={50}
                        height={50}
                    />
                </View>
            </View>
            <Footer>
                <Title>{"Footer"}</Title>
            </Footer>
        </Container>);
    }
}

export default SpinnerPage;