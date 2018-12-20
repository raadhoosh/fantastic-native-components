import Tab from "../Tab";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Tab", () => {
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
      component = shallow(<Tab {...props} 
        onPress={() => {
          alert('You tapped the Tab!');
      }}
      >Tab</Tab>);
    });
    it("should render a <Tab />", () => {
      const component = shallow(<Tab {...props} >Tab</Tab>);
      expect(component).toMatchSnapshot();
    });
  });
});
