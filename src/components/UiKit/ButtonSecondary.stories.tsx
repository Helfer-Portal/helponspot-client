import React from "react";
import { ButtonSecondaryBlue } from "./index";
import ButtonSecondaryOrange from "./ButtonSecondaryOrange";

export default {
  title: "ButtonSecondary",
};

export const BlueBorder = () => (
  <ButtonSecondaryBlue border>Hello</ButtonSecondaryBlue>
);

export const BlueWithBG = () => (
  <div className="bg-bluePrimary p-4">
    <ButtonSecondaryBlue>Hello</ButtonSecondaryBlue>
  </div>
);

export const OrangeBorder = () => (
  <ButtonSecondaryOrange border>Hello</ButtonSecondaryOrange>
);

export const OrangeWithBG = () => (
  <div className="bg-bluePrimary p-4">
    <ButtonSecondaryOrange>Hello</ButtonSecondaryOrange>
  </div>
);
