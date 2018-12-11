import Switch from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Switch", () => {
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
      component = shallow(<Switch primary 
        color= '#f00'         
        backgroundColor="9c27b0"      
        checked={true}
        width={30}
        height={30}
        onPress={() => {
          alert('You tapped the Switch!');
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
