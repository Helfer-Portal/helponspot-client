import React from "react";
import Enzyme, { shallow } from "enzyme";
import CreateRequest from "./CreateRequest";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<CreateRequest />", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<CreateRequest />);
    expect(wrapper.exists()).toBe(true);
  });
});
