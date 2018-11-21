import Image from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Image", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      component = shallow(<Image source={require("../../../screen/ImagePage/img_avatar3.png")} />);
    });
    it("should render a <Image />", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
