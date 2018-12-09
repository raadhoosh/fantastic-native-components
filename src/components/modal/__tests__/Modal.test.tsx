import Modal from "../index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
  ...props,
});

describe("Modal", () => {
  describe("rendering", () => {
    let component: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({        
        primary: true,
        secondary: true,
        success: true,        
      });
      component = shallow(<Modal primary
        onPress={() => {
          alert('You tapped the Text!');
        }}
      ></Modal>);
    });
    it("should render a <Modal />", () => {     
      expect(component).toMatchSnapshot();
    });
  });
});
