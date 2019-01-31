import React from "react";
import LoginPage from "../../screens/loginPage";
export interface IProps {
    navigation: any;
}
class LoginContainer extends React.PureComponent<IProps> {
    render() {
        const dataArray = [
            { title: "First Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
        ];
        return (<LoginPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} dataArray={dataArray} expanded={0} />);
    }
}

export default LoginContainer;