import Tab from "../Tab";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Tab", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({
        color: "#f00",
        primary: true,
        rtl: false,
      });
      const dataTabs = [
        {
          id: 1,
          title: "First tab title",
          content: "First tab content",
        },
        {
          id: 2,
          title: "Second tab title",
          content: "Second tab content",
        },
        {
          id: 3,
          title: "Third tab title",
          content: "Third tab content",
        },
      ];
      component = shallow(<Tab currentTab={1} dataTabs={dataTabs} {...props}
        onPress={() => {
          alert("You tapped the Tab!");
        }}
      >Tab</Tab>);
    });
    it("should render a <Tab />", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
