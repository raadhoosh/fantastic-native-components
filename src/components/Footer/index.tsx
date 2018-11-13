
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
    children: JSX.Element | JSX.Element[];
};

export default ({ children, ...props }: Props) => {
    return <StFooter {...props}>{children}</StFooter>;
};