import Panel from "..";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { View, Text } from "react-native";

describe("Panel", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            wrapper = shallow(<Panel visible={true} primary title="panel">
                <View>
                    <Text>Test</Text>
                </View>
            </Panel>);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});