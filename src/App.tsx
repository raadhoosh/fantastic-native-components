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
import JWPlayer from "./JWPlayer.js"

const RootStack = DrawerNavigator({
  Feed: FeedContainer,
  Video: VideoContainer,
  ForgotPassword: ForgotPasswordContainer,
  Login: LoginContainer,
},
  {
    contentComponent: props => <SideBar {...props} />,
  });
  import {NativeModules, View, Text} from 'react-native';
  var JWPlayerManager = NativeModules.JWPlayerManager;
 
type Props = {
  theme?: IPropsTheme,
};
export default class App extends React.Component<Props> {
  props: any;
  render() {
    alert( JWPlayerManager.addEvent('Birthday Party', '4 Privet Drive, Surrey'))
    return (
      <View>
       <View style={{
    flex: 1,
  }}>
            <JWPlayer
              style={{
                flex: 1,
              }}
              autostart={false}
              file={'https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8'}
              // onBeforePlay={() => this.onBeforePlay()}
              // onPlay={() => this.onPlay()}
              // onPlayerError={e => this.onPlayerError(e)}
              // onBuffer={() => this.onBuffer()}
              // onTime={time => this.onTime(time)}
            />
          </View>
      </View>
    )
    return (
      <ApolloProvider>
        <ThemeProvider theme={theme}>
          <RootStack />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}