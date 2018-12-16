import Search from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Search", () => {
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
      component = shallow(<Search value={"value"} {...props}
        onChangeText={() => {
          alert('You tapped the Text!');
        }}
      />);
    });
    it("should render a <Search />", () => {
      const component = shallow(<Search {...props}
        onChangeText={() => {
          alert('You tapped the Text!');
        }}
      />);
      expect(component).toMatchSnapshot();
    });
  });
});
