import * as React from "react";
import { ThemeProvider, Theme as IPropsTheme } from "./components";
import theme from "./common/theme";
import { DrawerNavigator } from "react-navigation";
import IconContainer from "./container/IconContainer";
import GridContainer from "./container/GridContainer";
import TextContainer from "./container/TextContainer";
import SideBar from "./container/SideBarContainer";

const RootStack = DrawerNavigator({
  Icon: IconContainer,
  Grid: GridContainer,
  Text: TextContainer,
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