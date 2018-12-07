import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon, Content, Header, Footer, Title, Left, Right, Text, Button } from "../../components";
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
  name?: string;
  checked?: boolean;  
}

class CheckBox extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props)
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange({ name: this.props.name, value: this.props.checked });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onChange}>
        {(this.props.checked === true)
          ? <View style={[styles.containerTrue, this.props.checkBoxTrueStyle]}>
            {/* <Icon name="check" style={[styles.icon, this.props.checkIconStyle]} /> */}
            <Icon name="check" type="FontAwesome" size={12} color="#fff"/>
          </View>
          : <View style={[styles.containerFalse, this.props.checkBoxFalseStyle]}></View>}
      </TouchableOpacity>
    );
  }
}

const styles = {
  containerTrue: {
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    height: 20,
    width: 20,
    backgroundColor: '#76a6ef'
  },
  containerFalse: {
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#dcdee5',
    alignItems: 'center',
    height: 20,
    width: 20
  },
  icon: {
    color: '#ffffff',
    fontSize: 15
  }
};

// CheckBox.propTypes = {
//   name: PropTypes.string,
//   checkBoxTrueStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
//   checkBoxFalseStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
//   checkIconStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
//   checked: PropTypes.bool,
//   onChange: PropTypes.func
// };

// CheckBox.defaultProps = {
//   name: 'checkbox',
//   checked: true
// };

export default CheckBox;