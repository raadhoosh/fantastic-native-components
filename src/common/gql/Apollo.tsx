import * as React from "react";
import { ApolloProvider } from "react-apollo";
import Client from "./Client";

class Apollo extends React.PureComponent {

  public render() {
    return (
      <ApolloProvider client={Client}>
          {this.props.children}
      </ApolloProvider>
    );
  }
}

export default Apollo;
