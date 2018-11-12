import Right from "..";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Text } from "react-native";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
const createTestProps = (props: Object) => ({
    ...props,
});

describe("Right", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            props = createTestProps({
                primary: true,
            });
            wrapper = shallow(<Right {...props}><Text>Right</Text></Right>);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});