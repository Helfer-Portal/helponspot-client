import React from "react";
import { InputWithLabel } from "./index";
import InputWithIcon from "./InputWithIcon";

export default {
  title: "Inputs",
};

export const OnWhiteBG = () => (
  <InputWithLabel
    title={"Input"}
    placeholder={"z.B. Blutspender"}
    onChange={() => {}}
    value=""
    bgWhite
  />
);

export const OnWhiteBGWithInput = () => (
  <InputWithLabel
    title={"Input"}
    placeholder={"z.B. Blutspender"}
    onChange={() => {}}
    value="Ich hab's drauf!"
    bgWhite
  />
);

export const OnBlueBG = () => (
  <div className="p-4 bg-bluePrimary">
    <InputWithLabel
      title={"Input"}
      placeholder={"z.B. Blutspender"}
      onChange={() => {}}
      value=""
    ></InputWithLabel>
  </div>
);

export const OnBlueBGWithInput = () => (
  <div className="p-4 bg-bluePrimary">
    <InputWithLabel
      title={"Input"}
      placeholder={"z.B. Blutspender"}
      onChange={() => {}}
      value="Ich hab's drauf!"
    ></InputWithLabel>
  </div>
);

export const OnBlueBGWithIcon = () => (
  <div className="p-4 bg-bluePrimary">
    <InputWithIcon
      title={"Input"}
      placeholder={"z.B. Blutspender"}
      onChange={() => {}}
      value=""
      icon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
            stroke="#1661AA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    />
  </div>
);

export const OnBlueBGWithIconWithInput = () => (
  <div className="p-4 bg-bluePrimary">
    <InputWithIcon
      title={"Input"}
      placeholder={"z.B. Blutspender"}
      onChange={() => {}}
      value="example@hallo.org"
      icon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
            stroke="#1661AA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    />
  </div>
);
