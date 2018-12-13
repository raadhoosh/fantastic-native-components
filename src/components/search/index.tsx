import * as React from "react";
import { StyledSearch, StyledTextInput } from "./Search.style";
import { ViewStyle, TextInputProps } from "react-native";
import { Icon } from "../../components";
import { Theme } from '..';

interface IProps extends TextInputProps{
  style?: ViewStyle | object | Array<ViewStyle>;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  backgroundColor?: string;
  color?: string;
  width?: string;
  theme?: Theme;
  fontSize?: string | number;
  borderRadius?: string | number;
  inverse?: boolean;
  borderColor?: string;
  onChangeText?: (value: string) => void;
  value?: string;
}

export interface IState {
  value?: string;
  close?: boolean;
}

class Search extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: props.value,
      close: false
    }

    this.onPressClose = this.onPressClose.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps: IProps) {

    this.setState({
      value: nextProps.value
    })

    if (nextProps.value !== " ") {
      this.setState({
        close: true
      });
    }
  }

  onPressClose() {
    this.setState({
      value: " ",
      close: false
    });
  }

  render() {

    return (
      <StyledSearch {...this.props}>
        <Icon type="FontAwesome" name="search" style={{ paddingRight: 10 }} />
        <StyledTextInput
          {...this.props}
          value={this.state.value}
          onChangeText={this.props.onChangeText}
          placeholder= {this.props.placeholder}
        />
        {
          this.state.value && this.state.close && <Icon type="FontAwesome" name="times-circle" style={{ paddingLeft: 10 }}
            size={18}
            onPress={this.onPressClose} />
        }
      </StyledSearch>
    )
  }
}

export default Search;
