import React from "react";
import ForgotPasswordPage from "../../screens/forgotPasswordPage";
export interface IProps {
    navigation: any;
    theme: any;
}
class ForgotPasswordContainer extends React.PureComponent<IProps> {

    onChangeRout = (route: string) => {
        this.props.navigation.navigate(route);
    }

    render() {

        return (<ForgotPasswordPage
            theme={this.props.theme}
            navigation={this.props.navigation}
            onChangeRout={this.onChangeRout}
        />);
    }
}

export default ForgotPasswordContainer;