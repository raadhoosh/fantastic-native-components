import Text from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Text", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({
        color: "#f00",
        primary: true,
      });
      component = shallow(<Text {...props} >text</Text>);
    });
    it("should render a <Text />", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
