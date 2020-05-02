import React from "react";
import { useForm } from "react-hook-form";

import "../../styles/organisation.css";

import {
  ButtonPrimaryBlue,
  ButtonSecondaryBlue,
  InputWithIcon,
} from "../../components/UiKit";
import Competences from "./CompetencesProfile";
import ProfilePic from "../../components/ProfilePic";
import { Subheading } from "../../components/Subheading";
import RepositoryImpl from "../../repository/repository";
import Skeleton from "react-loading-skeleton";
import { UserInfo } from "../../repository/model/helprequest";
import { AuthorizationContext } from "../../context/AuthorizationStore";

let repository = new RepositoryImpl();

const options_list = [
  "super",
  "Plasma",
  "Führerschein",
  "medizinische Grundausbildung",
];

type Inputs = {
  email: string;
};

export default function ProfileUserAccount() {
  /** partial, as before request it is not defined */
  let [userInfo, setUserInfo] = React.useState<Partial<UserInfo>>({});

  const [authInfo, setAuthInfo] = React.useContext(AuthorizationContext);

  const { handleSubmit, register, reset, errors } = useForm<Inputs>();

  React.useEffect(() => {
    (async () => {
      try {
        let userData = await repository.getUserInfo(authInfo.useruuid);
        setUserInfo(userData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [authInfo.useruuid]);

  const submitAlteredEmail = async (email: Inputs): Promise<void> => {
    if (email) {
      setUserInfo({ ...userInfo, email: email.email });
    }
    return;
  };

  // we will release this later
  // // side Effect which patches the new email address of user
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       let res = await repository.patchUserInfo(userInfo as UserInfo);
  //       console.log("response: ", res);
  //     } catch (err) {
  //       console.log(err);
  //       alert("Sorry, please try again");
  //     }
  //   })();
  // }, [userInfo]);

  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col w-full h-full px-8 py-4  overflow-y-auto bg-bluePrimary"
    >
      {/* Avatar */}
      <div className="my-3 flex flex-row items-center py-2">
        <ProfilePic image="/SampleProfilePic.png" />
        <div className="flex flex-col ml-2">
          <h2>{userInfo.firstName || <Skeleton />}</h2>
          <h2> {userInfo.lastName || <Skeleton />}</h2>
        </div>
      </div>

      {/* Skills */}
      <Competences defaultColorButtons={"#fff"} userInfo={userInfo} />

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
        <form onSubmit={handleSubmit(submitAlteredEmail)}>
          <div className="my-2">
            {/* TODO: Mit korrektem Tag ersetzen */}
            <InputWithIcon
              icon={MailIcon}
              placeholder={userInfo.email}
              name="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <div>{errors.email && errors.email.message}</div>
            <div className="my-2">
              {/* Kommt noch */}
              {/* <ButtonPrimaryBlue type="submit">Email ändern</ButtonPrimaryBlue> */}
            </div>
          </div>
        </form>
        {/* <div className="my-2">
          <InputWithIcon placeholder={userPhone} icon={PhoneIcon} />
        </div> */}
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
