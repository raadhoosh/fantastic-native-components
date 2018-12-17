import React from "react";
import CardsPage from "../../screens/cardsPage";
export interface Props {
    children: JSX.Element | JSX.Element[] | string;
    openDrawer: any;
}
class CardContainer extends React.PureComponent<Props> {
    render() {
        return (<CardsPage {...this.props} />);
    }
}

export default CardContainer;