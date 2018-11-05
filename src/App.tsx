import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: papayawhip;
`;
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyledView>
        <Text style={styles.welcome}>Welcome to Typescript React Native!</Text>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
