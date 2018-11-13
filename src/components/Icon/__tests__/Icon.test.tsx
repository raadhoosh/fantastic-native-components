import Icon from "..";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

describe("Icon", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            wrapper = shallow(<Icon info type="FontAwesome" name="map" />);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});