import * as React from "react";
import TextInput from "./style.index";
type Props = {
  theme?: any,  
};
export default class App extends React.Component<Props> {
  props: any;
  render() {
    return (
      <TextInput {...this.props} />       
    );
  }
}