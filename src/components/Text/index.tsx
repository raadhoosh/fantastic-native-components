import * as React from "react";
import Text from "./style.index";
type Props = {
  theme?: any,
};
export default class App extends React.Component<Props> {
  props: any;
  render() {
    return (
      <Text {...this.props} />
    );
  }
}