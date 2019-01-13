import * as React from "react";
import { ThemeProvider, Theme as IPropsTheme } from "./components";
import theme from "./common/theme";
import { DrawerNavigator } from "react-navigation";
import HomeContainer from "./containers/homeContainer";
import SideBar from "./containers/sideBarContainer";

const RootStack = DrawerNavigator({
  Home: HomeContainer,
},
  {
    contentComponent: props => <SideBar {...props} />,
  });

type Props = {
  theme?: IPropsTheme,
};
export default class App extends React.Component<Props> {
  props: any;
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    );
  }
}