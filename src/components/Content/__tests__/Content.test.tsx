import Content from "..";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { View, Text } from "react-native";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
const createTestProps = (props: Object) => ({
    ...props,
});

describe("Content", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<Content {...props}><View><Text>Hi Content</Text></View></Content>);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});