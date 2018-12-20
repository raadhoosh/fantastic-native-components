import React from "react";
import CardsPage from "../../screens/cardsPage";
export interface Props {
    navigation: any;
}
class CardContainer extends React.PureComponent<Props> {
    render() {
        return (<CardsPage openDrawer={() => {
            this.props.navigation.openDrawer();
        }} />);
    }
}

export default CardContainer;