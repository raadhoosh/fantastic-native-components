import Badge from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Badge", () => {
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
      component = shallow(<Badge {...props} 
        onPress={() => {
          alert('You tapped the Badge!');
      }}
      >Badge</Badge>);
    });
    it("should render a <Badge />", () => {
      const component = shallow(<Badge {...props} >Badge</Badge>);
      expect(component).toMatchSnapshot();
    });
  });
});
