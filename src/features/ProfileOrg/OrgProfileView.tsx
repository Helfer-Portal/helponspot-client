import * as React from "react"; // we need this to make JSX compile

import RepositoryImpl from "../../repository/repository";
import { OrganizationInfo } from "../../repository/model/helprequest";
import { Subheading } from "../../components/Subheading";
import ContactInput from "./ContactInput";
import { ButtonPrimaryBlue, ButtonSecondaryBlue } from "../../components/UiKit";

/** Profile view of organisation story */
const OrgProfileView = () => {
  const repository = new RepositoryImpl();

  let [orgInfo, setOrgInfo] = React.useState<OrganizationInfo | null>();
  const [isError, setIsError] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    async function loadOrgInfo() {
      setIsError(false);
      try {
        let orgInfo: OrganizationInfo = await repository.getOrganizationInfo(
          "42"
        );
        if (orgInfo) {
          setOrgInfo(orgInfo);
        } else {
          throw new Error("Unable to fetch Organisation Infos");
        }
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
    }
    loadOrgInfo();
  }, []);

  const ProfileViewContent = (
    <div className="flex flex-col h-full items-center justify-center p-4 bg-bluePrimary">
      <div className="flex w-full">
        <h1 className="question font-dm-sans-h1">Dein Profil</h1>
      </div>

      {/* Image, Title, Location */}
      <AvatarTitleView
        image={require("../../assets/helfer.png")}
        title={orgInfo?.name}
        location={orgInfo?.address}
      />

      {/* Paragraph */}
      <div className="flex flex-col my-4 w-full">
        <Subheading children={"Informationen"} />
        <div className="font-inter text-figmaParagraph text-sm">
          {orgInfo?.description}
        </div>
      </div>

      {/* Kontaktdaten */}
      <div className="flex flex-col w-full">
        <Subheading>Kontaktdaten</Subheading>
        <ContactInput placeholder={orgInfo?.email} />
        <ContactInput placeholder={orgInfo?.phone} />
      </div>

      {/* Account verwalten */}
      <div className="flex flex-col w-full">
        {/* Ausloggen */}
        <div className="py-2 flex w-full justify-center">
          <ButtonPrimaryBlue>Ausloggen</ButtonPrimaryBlue>
        </div>

        {/* Löschen */}
        <div className="py-2 flex w-full justify-center">
          <ButtonSecondaryBlue>
            <span>Account löschen</span>
          </ButtonSecondaryBlue>
        </div>
      </div>
    </div>
  );

  return <>{isError ? <div>hello</div> : ProfileViewContent}</>;
};

type AvatarTitleViewProps = {
  image: any;
  title?: string;
  location?: string;
};

const AvatarTitleView = ({ image, title, location }: AvatarTitleViewProps) => {
  return (
    <div className="flex w-full">
      <div
        style={{ height: 50, width: 50, overflow: "hidden" }}
        className="rounded-full bg-white min-w-4"
      >
        <img src={image} />
      </div>
      <div className="flex flex-col ml-4">
        {/* Title and Location */}
        <div className="font-dm-sans text-figmaDescription font-bold">
          {title}
        </div>
        <div className="font-inter text-figmaParagraph text-sm">
          <span role={"img"} aria-label={"Standort"}>
            📍
          </span>{" "}
          {location}
        </div>
      </div>
    </div>
  );
};

export default OrgProfileView;
