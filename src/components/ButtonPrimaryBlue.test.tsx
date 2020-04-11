import React from "react";
import Enzyme, { shallow } from "enzyme";
import ButtonPrimaryBlue from "./ButtonPrimaryBlue";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<ButtonPrimaryBlue />", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<ButtonPrimaryBlue />);
    expect(wrapper.exists()).toBe(true);
  });
});
