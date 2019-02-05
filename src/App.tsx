import * as React from "react";
import { ThemeProvider, Theme as IPropsTheme } from "./components";
import theme from "./common/theme";
import { DrawerNavigator } from "react-navigation";
import FeedContainer from "./containers/feedContainer";
import VideoContainer from "./containers/videoContainer";
import SideBar from "./containers/sideBarContainer";
import ApolloProvider from "./common/gql/Apollo";
import LoginContainer from "./containers/loginContainer";
import ForgotPasswordContainer from "./containers/forgotContainer";

const RootStack = DrawerNavigator({
  Feed: FeedContainer,
  Video: VideoContainer,
  ForgotPassword: ForgotPasswordContainer,
  Login: LoginContainer,
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
      <ApolloProvider>
        <ThemeProvider theme={theme}>
          <RootStack />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}