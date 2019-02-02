import React from "react";
import ForgotPasswordPage from "../../screens/forgotPasswordPage";
export interface IProps {
    navigation: any;
}
class ForgotPasswordContainer extends React.PureComponent<IProps> {

    onChangeRout = (route: string) => {
        this.props.navigation.navigate(route);
    }

    render() {
        const dataArray = [
            { title: "First Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
        ];
        return (<ForgotPasswordPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} dataArray={dataArray} expanded={0}
            navigation={this.props.navigation}
            onChangeRout={this.onChangeRout}
        />);
    }
}

export default ForgotPasswordContainer;