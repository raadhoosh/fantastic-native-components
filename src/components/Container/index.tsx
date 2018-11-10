import * as React from "react";
import View from "./style.index";
type Props = {
    theme?: any,
    children: JSX.Element | JSX.Element[] | string;
};

export default (props: Props) => {
    return <View {...props} />;
};