import StatusBar from "..";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Text } from "react-native";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("StatusBar", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            wrapper = shallow(<StatusBar backgroundColor={"blue"} barStyle="light-content" />);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});