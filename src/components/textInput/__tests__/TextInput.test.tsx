import TextInput from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("TextInput", () => {
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
      component = shallow(<TextInput {...props}
        onChangeText={() => {
          alert('You tapped the Text!');
        }}
      />);
    });
    it("should render a <TextInput />", () => {
      const component = shallow(<TextInput {...props}
        onChangeText={() => {
          alert('You tapped the Text!');
        }}
      />);
      expect(component).toMatchSnapshot();
    });
  });
});
