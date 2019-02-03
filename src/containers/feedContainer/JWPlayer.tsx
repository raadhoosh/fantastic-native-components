import * as React from "react";
import { ViewProps, requireNativeComponent } from "react-native";

let JWPlayer = requireNativeComponent("JWPlayer", View, {
    nativeOnly: { onChange: true },
});
interface IProps extends ViewProps {
    // player?: boolean;
    buttonText?: string;
}
export default class View extends React.Component<IProps> {
    render() {
        return (<JWPlayer  {...this.props} />);
    }
}