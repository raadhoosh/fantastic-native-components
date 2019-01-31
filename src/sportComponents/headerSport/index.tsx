import { TouchableOpacity, Image } from "react-native";
import { withTheme } from "styled-components";
import * as React from "react";
import {  Header, Left, Right, Icon, Row } from "../../components";

type Props = {
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
    openLogin: () => void;
};

const headerSport = (props: Props) => {
    const { children, primary, secondary, success, info, warning, danger, light, dark, ...others } = props;

    const color = (primary && "primary") ||
        (secondary && "secondary") ||
        (success && "success") ||
        (info && "info") ||
        (warning && "warning") ||
        (danger && "danger") ||
        (light && "light") ||
        (dark && "dark") ||
        "primary";
    const backgroundColor = props.theme[color].dark;
    return (
        <Header >
            <Left style={{ marginLeft: 0 }}>
                <TouchableOpacity onPress={props.openDrawer}>
                    <Icon size={30} type="Ionicons" name="md-menu" color={"#fff"} />
                </TouchableOpacity>
            </Left>
            <Row style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
            }} >
                <Image
                    source={require("./logo.png")}
                    style={{
                        width: 130,
                        height: 20,
                    }}
                />
            </Row>
            <Right style={{ marginLeft: 0 }}>
                <TouchableOpacity onPress={props.openLogin}>
                    <Icon size={20} type="FontAwesome" name="user" color={"#fff"} />
                </TouchableOpacity>
            </Right>
        </Header>
    );
};

export default withTheme(headerSport);