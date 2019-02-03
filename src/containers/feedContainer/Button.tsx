import * as React from "react";
import { ViewProps, requireNativeComponent } from "react-native";
interface IProps extends ViewProps {
    buttonText: string;
    OnTop?: any;
}
let ButtonView = requireNativeComponent("ButtonView", Button, {
    nativeOnly: { onChange: false },
});
export default class Button extends React.Component<IProps> {
    onChange = (event: any) => {
        if (this.props.OnTop) {
            this.props.OnTop(event.nativeEvent.message);
        }
    }
    render() {
        return (<ButtonView {...this.props} onChange={this.onChange} />);
    }
}