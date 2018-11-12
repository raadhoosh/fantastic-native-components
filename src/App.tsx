import * as React from "react";
import { ThemeProvider, Theme as IPropsTheme } from "./components";
import theme from "./common/theme";
import { DrawerNavigator } from "react-navigation";
import GridContainer from "./container/GridContainer";
import TextContainer from "./container/TextContainer";
import SideBar from "./container/SideBarContainer";
import ButtonContainer from "./container/ButtonContainer";

const RootStack = DrawerNavigator({
  Grid: GridContainer,
  Text: TextContainer,
  Button: ButtonContainer,
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