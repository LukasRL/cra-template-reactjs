import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  test("Should render ok", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
