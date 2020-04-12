import React from "react";
import { ButtonSecondaryBlue } from "./index";
import ButtonSecondaryOrange from "./ButtonSecondaryOrange";

export default {
  title: "ButtonSecondary",
};

export const Blue = () => <ButtonSecondaryBlue>Hello</ButtonSecondaryBlue>;

export const BlueBorder = () => (
  <ButtonSecondaryBlue border>Hello</ButtonSecondaryBlue>
);

export const Orange = () => (
  <ButtonSecondaryOrange>Hello</ButtonSecondaryOrange>
);

export const OrangeBorder = () => (
  <ButtonSecondaryOrange border>Hello</ButtonSecondaryOrange>
);
