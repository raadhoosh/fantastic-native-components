import * as React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Interface.index";
type Props = {
    theme?: Theme,
    children: any,
};
export default function Provider(props: Props) {

    return (
        <ThemeProvider theme={props.theme}>
            {props.children}
        </ThemeProvider>
    );

}