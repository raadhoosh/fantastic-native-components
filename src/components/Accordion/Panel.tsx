import * as React from "react";
import { StyledHeader, StyledHeaderText, StyledContent, StyledBody } from "./Panel.style";
import { ViewStyle, ModalProps, View, Modal, TouchableOpacity } from "react-native";
import { Icon, Button } from "../../components";
import { Theme } from "..";
type IStyle=  ViewStyle | object | Array<ViewStyle>;
interface IProps {
    header?: JSX.Element | JSX.Element[];
    body?: JSX.Element | JSX.Element[];
    styledContent?: IStyle;
    children?: JSX.Element | JSX.Element[] | string;
    icon?: JSX.Element;
    visible?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    dark?: boolean;
    backgroundColor?: string;
    title?: string;
    toggle?: () => void;
}

class Panel extends React.PureComponent<IProps> {
    renderHeader = () => {
        const { header } = this.props;
        if (header) {
            return header;
        }
        return (<StyledHeader onPress={this.props.toggle} {...this.props}>
            <StyledHeaderText>
                {this.props.title}
            </StyledHeaderText>
            {this.props.icon}
        </StyledHeader >);
    }
    renderBody = () => {
        const { visible, body } = this.props;
        if (visible) {
            if (body) {
                return body;
            }
            return ((<StyledBody {...this.props}>
                {this.props.children}
            </StyledBody>));
        }
        return null;
    }
    render() {
        const { styledContent } = this.props;
        let style: IStyle = { flex: 1, marginTop: 5 };
        if (styledContent) {
            style = styledContent;
        }
        return (
            <StyledContent style={style}>
                {this.renderHeader()}
                {this.renderBody()}
            </StyledContent>
        );
    }

}

export default Panel;
