import Radio from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Radio", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;    
    beforeEach(() => {      
      component = shallow(<Radio primary 
        color= '#f00'
        fontSize={12} 
        textColor="#9c27b0"
        label="secondary"
        checked={true}
        onPress={() => {
          alert('You tapped the Radio!');
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
