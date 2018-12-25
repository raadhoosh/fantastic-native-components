import CardImages from "../CardImages";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
// tslint:disable-next-line:no-var-requires
const uri = require("../../../screens/imagePage/img_avatar3.png");
const createTestProps = (props: Object) => ({
  ...props,
});

describe("CardImages", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({
        color: "#f00",
        primary: true,
      });
      component = shallow(<CardImages source={uri} {...props}
        onPress={() => {
          alert("You tapped the CardImages!");
      }}
      >CardImages</CardImages>);
    });
    it("should render a <CardImages />", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
