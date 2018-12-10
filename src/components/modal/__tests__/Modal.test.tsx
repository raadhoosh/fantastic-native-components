import React from "react";
import {Text} from "react-native";
import Modal from "../index";
import { shallow, ShallowWrapper } from "enzyme";

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
      >
      <Text>
        children
      </Text>
      </Modal>);
    });
    it("should render a <Modal />", () => {     
      expect(component).toMatchSnapshot();
    });
  });
});
