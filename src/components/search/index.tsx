import * as React from "react";
import { StyledSearch, StyledTextInput } from "./Search.style";
import { ViewStyle, TextInput } from "react-native";
import { Icon } from "../../components";
import { Theme } from '..';

interface IProps {
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
  borderRadius?: string;
  inverse?: boolean;
  borderColor?: string;
  onFocus?: () => void;
}

export interface IState {
  close: boolean;
}

class Search extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      close: false
    }

    this.onFocus = this.onFocus.bind(this);
    this.onPressClose = this.onPressClose.bind(this);
  }

  onFocus() {
    this.setState({
      close: true
    });
  }

  onPressClose() {
    this.setState({
      close: false
    });
  }

  render() {
    return (
      <StyledSearch>
        <Icon type="FontAwesome" name="search" style={{ paddingRight: 10 }} />
        <StyledTextInput onFocus={this.onFocus} />
        {
          this.state.close && <Icon type="FontAwesome" name="close" style={{ paddingLeft: 10 }} onPress={this.onPressClose} />
        }
      </StyledSearch>
    )
  }
}

export default Search;
