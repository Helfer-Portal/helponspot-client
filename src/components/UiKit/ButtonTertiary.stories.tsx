import React from "react";
import { ButtonTertiary, ButtonTertiaryPlus } from "./index";

export default {
  title: "ButtonTertiary",
  component: ButtonTertiary,
};

export const WithoutIcon = () => <ButtonTertiary>Hello</ButtonTertiary>;

export const WithIcon = () => <ButtonTertiaryPlus>Hello</ButtonTertiaryPlus>;
