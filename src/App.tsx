import * as React from "react";
import { ThemeProvider, Theme as IPropsTheme, Text } from "./components";
import theme from "./common/theme";
import { View } from "react-native";

type Props = {
  theme?: IPropsTheme,
};
export default class App extends React.Component<Props> {
  props: any;
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <Text>Welcome to Typescript React Native!</Text>
        </View>
      </ThemeProvider>
    );
  }
}