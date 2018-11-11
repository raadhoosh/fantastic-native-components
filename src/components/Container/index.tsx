import * as React from "react";
import View from "./container.style";
type Props = {
    theme?: any,
    children: JSX.Element | JSX.Element[] | string;
};

export default (props: Props) => {
    return <View {...props} />;
};