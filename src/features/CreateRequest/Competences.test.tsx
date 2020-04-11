import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Competences from "./CreateRequest";

Enzyme.configure({ adapter: new Adapter() });

describe("<CreateRequest />", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<Competences />);
    expect(wrapper.exists()).toBe(true);
  });
});
