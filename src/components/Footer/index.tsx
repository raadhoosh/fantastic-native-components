
import * as React from "react";
import StFooter from "./footer.style";
type Props = {
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    dark?: boolean;
    theme?: any;
    children: JSX.Element | JSX.Element[] ;
};

export default (props: Props) => {
    return <StFooter {...props}>{props.children}</StFooter>;
};