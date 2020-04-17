import React from "react";

import "../../styles/organisation.css";

import {
  ButtonPrimaryBlue,
  ButtonSecondaryBlue,
  InputWithIcon,
} from "../../components/UiKit";
import Competences from "../CreateRequest/Competences";
import ProfilePic from "../../components/ProfilePic";
import { Subheading } from "../../components/Subheading";

const options_list = [
  "super",
  "Plasma",
  "Führerschein",
  "medizinische Grundausbildung",
];
const userFirstName = "Max";
const userLastName = "Mustermann";
const userEmail = "maxustermann@gmail.com";
const userPhone = "0156-123245";
const userDistance = 12;
const userCity = "Wuppertal";

export default function ProfileUserAccount() {
  let [firstName, setFirstName] = React.useState(userFirstName);
  let [lastName, setLastName] = React.useState(userLastName);

  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col w-full h-full px-8 py-4  overflow-y-auto bg-bluePrimary"
    >
      {/* Avatar */}
      <div className="my-3 flex flex-row items-center py-2">
        <ProfilePic image="/SampleProfilePic.png" />
        <div className="flex flex-col ml-2">
          <h2>{firstName}</h2>
          <h2> {lastName}</h2>
        </div>
      </div>

      {/* Skills */}
      <Competences defaultColorButtons={"#fff"} />

      {/* Location */}
      <div className="flex flex-col my-4 w-full">
        <Subheading children={"Informationen"} />
        <div className="font-inter text-figmaParagraph text-sm">
          Teile deine Standortinformationen, damit Organisationen dich besser
          finden können.
        </div>
        <div className="py-2">
          <ButtonPrimaryBlue>Standort freigeben</ButtonPrimaryBlue>
        </div>
      </div>

      {/* Kontaktdaten */}
      <div className="flex flex-col w-full">
        <Subheading>Kontaktdaten</Subheading>
        <div className="my-2">
          <InputWithIcon placeholder={userEmail} icon={MailIcon} />
        </div>
        <div className="my-2">
          <InputWithIcon placeholder={userPhone} icon={PhoneIcon} />
        </div>
      </div>

      {/* Account */}
      <div className="mt-4">
        <Subheading>Account verwalten</Subheading>
        <div className="py-2">
          <ButtonPrimaryBlue>Ausloggen</ButtonPrimaryBlue>
        </div>
        <div className="py-2">
          <ButtonSecondaryBlue>Account löschen</ButtonSecondaryBlue>
        </div>
      </div>
    </div>
  );
}

const MailIcon = (
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
);

const PhoneIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H6.28C6.48979 1.00016 6.69422 1.0663 6.86436 1.18905C7.03449 1.3118 7.1617 1.48496 7.228 1.684L8.726 6.177C8.8019 6.40534 8.79293 6.65339 8.70072 6.87564C8.60851 7.0979 8.43925 7.27945 8.224 7.387L5.967 8.517C7.07332 10.9655 9.03446 12.9267 11.483 14.033L12.613 11.776C12.7205 11.5607 12.9021 11.3915 13.1244 11.2993C13.3466 11.2071 13.5947 11.1981 13.823 11.274L18.316 12.772C18.5152 12.8383 18.6885 12.9657 18.8112 13.136C18.934 13.3064 19.0001 13.511 19 13.721V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H16C7.716 19 1 12.284 1 4V3Z"
      stroke="#1661AA"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
