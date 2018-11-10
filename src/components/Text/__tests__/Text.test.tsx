import Text from "../Text";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { View as RNView } from "react-native";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Text", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<Text {...props} />);
    });
    it("should render a <Text />", () => {
      const component = shallow(<Text />);
      expect(component).toMatchSnapshot();
    });
  });
});
