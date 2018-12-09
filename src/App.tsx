import * as React from "react";
import { ThemeProvider, Theme as IPropsTheme } from "./components";
import theme from "./common/theme";
import { DrawerNavigator } from "react-navigation";
import IconContainer from "./containers/iconContainer";
import GridContainer from "./containers/gridContainer";
import TextContainer from "./containers/textContainer";
import SideBar from "./containers/sideBarContainer";
import ButtonContainer from "./containers/buttonContainer";
import TextInputContainer from "./containers/textInputContainer";
import ImageContainer from "./containers/imageContainer";
import ModalContainer from "./containers/modalContainer";
import CheckBoxContainer from "./containers/checkBoxContainer";

const RootStack = DrawerNavigator({
  Icon: IconContainer,
  Grid: GridContainer,
  Text: TextContainer,
  Button: ButtonContainer,
  TextInput: TextInputContainer,
  Image: ImageContainer,
  Modal: ModalContainer,
  CheckBox: CheckBoxContainer,
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