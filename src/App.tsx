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
import RadioContainer from "./containers/radioContainer";
import ListContainer from "./containers/listContainer";
import BadgeContainer from "./containers/badgeContainer";
import SearchContainer from "./containers/searchContainer";
import CardsContainer from "./containers/cardsContainer";

const RootStack = DrawerNavigator({
  Icon: IconContainer,
  Grid: GridContainer,
  Text: TextContainer,
  Button: ButtonContainer,
  TextInput: TextInputContainer,
  Image: ImageContainer,
  Modal: ModalContainer,
  CheckBox: CheckBoxContainer,
  Radio: RadioContainer,
  List: ListContainer,
  Badge: BadgeContainer,
  Search: SearchContainer,
  Cards: CardsContainer,
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