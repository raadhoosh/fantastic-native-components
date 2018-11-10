import * as React from "react";
import { Theme as IPropsTheme } from "./components";
import { createStackNavigator } from "react-navigation";
import GridContainer from "./container/GridContainer";
const RootStack = createStackNavigator({
    Grid: GridContainer,
});

type Props = {
    theme?: IPropsTheme,
};
export default class App extends React.Component<Props> {
    render() {
        return (<RootStack />);
    }
}