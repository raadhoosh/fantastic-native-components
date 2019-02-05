import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { withTheme } from "styled-components";
import { Header, Left, Right, Icon, Row } from "../../components";

type IProps = {
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    dark?: boolean;
    theme?: any;
    children?: JSX.Element | JSX.Element[];
    // openDrawer?: () => void;
    // onChangeRout: (route: string) => void;
    navigation: any;
};

class HeaderSport extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            changeIcon: false,
        };
    }

    onChangeRout = (route: string) => {
        // tslint:disable-next-line:no-unused-expression
        this.props.navigation && this.props.navigation.navigate(route);
    }
    openDrawer = () => {
        // tslint:disable-next-line:no-unused-expression
        this.props.navigation && this.props.navigation.openDrawer();
    }

    render() {
        const { primary, secondary, success, info, warning, danger, light, dark, ...others } = this.props;

        return (
            <Header {...{ primary, secondary, success, info, warning, danger, light, dark }}  >
                <Left style={{ marginLeft: 0 }}>
                    <TouchableOpacity onPress={this.openDrawer}>
                        <Icon size={30} type="Ionicons" name="md-menu" color={"#fff"} />
                    </TouchableOpacity>
                </Left>
                <Row style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                }} >
                    <TouchableOpacity onPress={() => this.onChangeRout("Feed")}>
                        <Image
                            source={require("./logo.png")}
                            style={{
                                width: 130,
                                height: 20,
                            }}
                        />
                    </TouchableOpacity>

                </Row>
                <Right style={{ marginLeft: 0 }}>
                    <TouchableOpacity onPress={() => this.onChangeRout("Login")}>
                        <Icon size={20} type="FontAwesome" name="user" color={"#fff"} />
                    </TouchableOpacity>
                </Right>
            </Header>
        );
    }
}

export default withTheme(HeaderSport);