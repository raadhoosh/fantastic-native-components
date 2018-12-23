import * as React from "react";
import { ThemeProvider, Theme as IPropsTheme } from "./components";
import theme from "./common/theme";
import { DrawerNavigator } from "react-navigation";
import PanelContainer from "./containers/panelContainer";
import AccordionContainer from "./containers/accordionContainer";
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
import TabContainer from "./containers/tabContainer";
import CardsContainer from "./containers/cardsContainer";
import FABContainer from "./containers/fABContainer";
import ToastContainer from "./containers/toastsContainer";

const RootStack = DrawerNavigator({
  Panel: PanelContainer,
  Accordion: AccordionContainer,
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
  Tab: TabContainer,
  Cards: CardsContainer,
  FAB: FABContainer,
  Toasts: ToastContainer,
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