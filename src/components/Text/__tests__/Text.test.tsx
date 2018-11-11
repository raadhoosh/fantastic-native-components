import Text from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { any } from "prop-types";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Text", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({
        color: '#f00',
        primary: true
      });
      wrapper = shallow(<Text {...props} >text</Text>);
    });
    it("should render a <Text />", () => {
      const component = shallow(<Text {...props} >text</Text>);
      expect(component).toMatchSnapshot();
    });
  });
});
