
import * as React from "react";
import StyledFooter from "./Footer.style";
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
    return <StyledFooter {...props}>{children}</StyledFooter>;
};