import FAB from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("FAB", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({
        color: "#f00",
        primary: true,
      });
      component = shallow(<FAB {...props}
        onPress={() => {
          alert("You tapped the FAB!");
        }}
      />);
    });

    it("should render a <FAB />", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
