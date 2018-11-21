import Container from "..";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { View, Text } from "react-native";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
const createTestProps = (props: Object) => ({
    ...props,
});

describe("Container", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<Container {...props}><View><Text>Hi Container</Text></View></Container>);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});