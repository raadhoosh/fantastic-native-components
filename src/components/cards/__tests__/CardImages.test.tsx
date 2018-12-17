import CardImages from "../CardImages";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("CardImages", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({
        color: '#f00',
        primary: true,
        secondary: true,
        success: true,
      });
      component = shallow(<CardImages source={require("../../../screen/ImagePage/img_avatar3.png")} {...props} 
        onPress={() => {
          alert('You tapped the CardImages!');
      }}
      >CardImages</CardImages>);
    });
    it("should render a <CardImages />", () => {
      const component = shallow(<CardImages source={require("../../../screen/ImagePage/img_avatar3.png")} {...props} >CardImages</CardImages>);
      expect(component).toMatchSnapshot();
    });
  });
});
