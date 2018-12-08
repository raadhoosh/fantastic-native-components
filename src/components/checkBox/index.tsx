import React ,{Component} from "react";
import { TouchableOpacity } from "react-native";
import { Icon, Text } from "../../components";
import { StyledCheckBox } from './CheckBox.style';
import { Theme } from '..';

export interface IProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  inverse?: boolean;
  backgroundColor?: string;
  color?: string;
  width?: string;
  theme?: Theme;
  onPress?: () => void;
  onChange?: () => void;
  disabled?: boolean;
  fontSize?: string | number;
  borderRadius?: string;
  label?: string;
  name?: 'checkbox';
  checked?: boolean;
}

class CheckBox extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    // this.props.onChange({ name: this.props.name, value: this.props.checked });
    this.props.onChange;
    
  }

  render() {

    return (
      <TouchableOpacity onPress={this.onChange}>
        <Text>
          {this.props.label}
        </Text>
        <StyledCheckBox {...this.props}>
        {(this.props.checked) && <Icon name="check" type="FontAwesome" size={12} color="#fff" />}
        </StyledCheckBox>
      </TouchableOpacity>
    );
  }
}

export default CheckBox;