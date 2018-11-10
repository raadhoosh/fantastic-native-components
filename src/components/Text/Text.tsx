import * as React from "react";
import Text from "./style.Text";
type Props = {
  theme?: any,
  children: any,
};
export default class App extends React.Component<Props> {
  props: any;
  render() {
    return (
      <Text {...this.props} >
        {this.props.children}
      </Text>
    );
  }
}