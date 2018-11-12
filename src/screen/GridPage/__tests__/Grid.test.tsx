import Grid from "..";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

const createTestProps = (props: Object) => ({
    ...props,
});

describe("Grid", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<Grid {...props}>test</Grid>);
        });
        it("should render a <View />", () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});