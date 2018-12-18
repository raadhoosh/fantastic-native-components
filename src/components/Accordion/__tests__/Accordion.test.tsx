import Accordion from "..";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

describe("Accordion", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        const dataArray = [
            { title: "First Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
          ];
        beforeEach(() => {
            wrapper = shallow(<Accordion primary  dataArray={dataArray} expanded={0} />);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});