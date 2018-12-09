import Radio from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Radio", () => {
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
      component = shallow(<Radio primary 
        onPress={() => {
          alert('You tapped the Radio!');
      }}
      />);
    });
    it("renders", () => {
      expect(component.exists()).toBe(true);
  });
  it("toMatchSnapshot", () => {
      expect(component).toMatchSnapshot();
  });
  });
});
