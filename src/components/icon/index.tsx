import * as React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import { withTheme } from "styled-components";
import { Theme } from '..';

type Props = {
    type?: "Ionicons" | "Entypo" | "EvilIcons" | "Feather"
    | "FontAwesome" | "Foundation" | "MaterialIcons"
    | "MaterialCommunityIcons" | "Octicons"
    | "SimpleLineIcons" | "Zocial";
    name: string;
    style?: any;
    theme?: Theme;
    onPress?: () => void;
    size?: number;
    color?: string;
    primary?: boolean;
    secondary?: boolean;
    info?: boolean;
    success?: boolean;
    purple?: boolean;
    danger?: boolean;
    warning?: boolean;
};

class Icon extends React.PureComponent<Props> {
    render() {
        const {
            size,
            type,
            color,
            primary,
            secondary,
            info,
            success,
            purple,
            danger,
            warning,
            ...props } = this.props;

        const tmColor = (primary && "primary") ||
            (secondary && "secondary") ||
            (info && "info") ||
            (success && "success") ||
            (purple && "purple") ||
            (warning && "warning") ||
            (danger && "danger");
        const colorIcon = color ? color : tmColor && props.theme ? props.theme[tmColor].main : "#000";
        let Icons;
        switch (type) {
            case "Ionicons":
                Icons = Ionicons;
                break;
            case "EvilIcons":
                Icons = EvilIcons;
                break;
            case "Feather":
                Icons = Feather;
                break;
            case "Entypo":
                Icons = Entypo;
                break;
            case "FontAwesome":
                Icons = FontAwesome;
                break;
            case "Foundation":
                Icons = Foundation;
                break;
            case "MaterialIcons":
                Icons = MaterialIcons;
                break;
            case "MaterialCommunityIcons":
                Icons = MaterialCommunityIcons;
                break;
            case "Octicons":
                Icons = Octicons;
                break;
            case "Zocial":
                Icons = Zocial;
                break;
            case "SimpleLineIcons":
                Icons = SimpleLineIcons;
                break;
            default:
                Icons = Ionicons;
        }

        return <Icons color={colorIcon} size={size || 22}  {...props} />;
    }
}

export default withTheme(Icon);