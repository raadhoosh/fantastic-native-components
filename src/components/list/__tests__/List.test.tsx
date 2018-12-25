import List from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
// tslint:disable-next-line:no-var-requires
const uri = require("../../../screens/imagePage/img_avatar3.png");

describe("List", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    beforeEach(() => {
      component = shallow(<List dataSource={
        [
          {
            id: 0,
            text: "Ben",
            source: uri,
          },
        ]
      }
        onPress={() => {
          alert("You tapped the List!");
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
