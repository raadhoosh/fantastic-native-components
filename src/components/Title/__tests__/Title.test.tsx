import Title from "..";
import {ThemeProvider} from "../..";
import theme from "../../../common/theme";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import React from "react";

describe("Title", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            wrapper = shallow(<ThemeProvider theme={theme}><Title>Title</Title></ThemeProvider>);
        });
        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        });
        // it("find", () => {
        //     expect(wrapper.find("Text")).toHaveLength(1);
        // });
        it("toMatchSnapshot", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});