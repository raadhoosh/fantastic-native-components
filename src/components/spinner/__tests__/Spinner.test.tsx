import Spinner from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

describe("Spinner", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;

    beforeEach(() => {
      component = shallow(<Spinner primary name={"cog"}
        color='#f00'
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
