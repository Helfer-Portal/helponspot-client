import React from "react";
import { ButtonPrimaryBlue } from "./index";
import ButtonPrimaryOrange from "./ButtonPrimaryOrange";

export default {
  title: "ButtonPrimary",
};

export const BlueWithoutIcon = () => (
  <ButtonPrimaryBlue>Hello</ButtonPrimaryBlue>
);

export const OrangeWithoutIcon = () => (
  <ButtonPrimaryOrange>Hello</ButtonPrimaryOrange>
);
