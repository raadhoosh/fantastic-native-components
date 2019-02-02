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
    children: JSX.Element | JSX.Element[];
    openDrawer: () => void;
    onChangeRout: (route: string) => void;
    navigation: any;
};

class headerSport extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            changeIcon: false,
        };
    }

    onChangeRout = (route: string) => {
        this.props.navigation && this.props.navigation.navigate(route);
    }

    render() {
        const { children, primary, secondary, success, info, warning, danger, light, dark, ...others } = this.props;

        const color = (primary && "primary") ||
            (secondary && "secondary") ||
            (success && "success") ||
            (info && "info") ||
            (warning && "warning") ||
            (danger && "danger") ||
            (light && "light") ||
            (dark && "dark") ||
            "primary";
        const backgroundColor = this.props.theme[color].dark;
        return (
            <Header >
                <Left style={{ marginLeft: 0 }}>
                    <TouchableOpacity onPress={this.props.openDrawer}>
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
};

export default withTheme(headerSport);