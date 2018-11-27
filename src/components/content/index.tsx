import * as React from "react";
import StyledKeyboardAwareScrollView from "./Content.style";
type Props = {
    theme?: any,
    color?: string,
    full?: boolean,
    disableKBDismissScroll?: boolean;
    children: JSX.Element | JSX.Element[] | string;
};

export default (props: Props) => {
    const { disableKBDismissScroll, children, ...others } = props;
    return <StyledKeyboardAwareScrollView {...others}
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={disableKBDismissScroll ? undefined : { x: 0, y: 0 }}>
        {children}
    </StyledKeyboardAwareScrollView>;
};