import Image from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
// tslint:disable-next-line:no-var-requires
const uri = require("../../../screens/imagePage/img_avatar3.png");

describe("Image", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      component = shallow(<Image source={uri} />);
    });
    it("should render a <Image />", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
