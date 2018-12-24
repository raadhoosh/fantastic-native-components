import Spinner from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Spinner", () => {
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
      component = shallow(<Spinner primary name={"cog"}
        color= '#f00'              
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
