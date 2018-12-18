import React from "react";
import AccordionPage from "../../screens/accordionPage";
export interface IProps {
    navigation: any;
}
class IconContainer extends React.PureComponent<IProps> {
    render() {
        const dataArray = [
            { title: "First Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
          ];
        return (<AccordionPage  openDrawer={() => {
            this.props.navigation.openDrawer();
        }}   dataArray={dataArray} expanded={0}  />);
    }
}

export default IconContainer;