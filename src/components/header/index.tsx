import { withTheme } from "styled-components";
import * as React from "react";
import StHeader from "./Header.style";
import { StatusBar } from "..";

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
    children: JSX.Element | JSX.Element[];
};

const MyComponent = (props: Props) => {
    const { children, primary, secondary, success, info, warning, danger, light, dark, ...others } = props;

    const color = (primary && "primary") ||
        (secondary && "secondary") ||
        (success && "success") ||
        (info && "info") ||
        (warning && "warning") ||
        (danger && "danger") ||
        (light && "light") ||
        (dark && "dark") ||
        "primary";
    const backgroundColor = props.theme[color].dark;
    return (
        <React.Fragment>
            <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
            <StHeader  color={color} {...others}>{children}</StHeader>
        </React.Fragment>
    );
};

export default withTheme(MyComponent);