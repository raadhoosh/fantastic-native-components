import * as React from "react";
import { Theme as IPropsTheme } from "./components";
import { createStackNavigator } from "react-navigation";
import TextContainer from "./container/TextContainer";
const RootStack = createStackNavigator({
    Text: TextContainer,
});

type Props = {
    theme?: IPropsTheme,
};
export default class App extends React.Component<Props> {
    render() {
        return (<RootStack />);
    }
}