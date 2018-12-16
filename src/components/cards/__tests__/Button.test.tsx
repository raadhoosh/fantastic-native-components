import Button from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Button", () => {
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
      component = shallow(<Button {...props} 
        onPress={() => {
          alert('You tapped the button!');
      }}
      >Button</Button>);
    });
    it("should render a <Button />", () => {
      const component = shallow(<Button {...props} >Button</Button>);
      expect(component).toMatchSnapshot();
    });
  });
});
