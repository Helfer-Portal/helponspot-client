import * as React from "react"; // we need this to make JSX compile
import BackButton from "../../../../components/BackButton";
import { Subheading } from "../../../../components/Subheading";
import RepositoryImpl from "../../../../repository/repository";
import {
  HelpRequest,
  OrganizationInfo,
} from "../../../../repository/model/helprequest";
import CheckboxButton from "../../../../components/CheckboxButton";

const repository = new RepositoryImpl();

/** Profile view of organisation story */
const RequestDetails = () => {
  const [reqData, setReqData] = React.useState<HelpRequest | null>(null);
  const [orgData, setOrgData] = React.useState<OrganizationInfo | null>(null);
  const [isError, setIsError] = React.useState<boolean>(false);

  async function loadOrgInfo() {
    setIsError(false);
    try {
      let res = await repository.getOrganizationInfo("42");
      if (res) {
        setOrgData(res);
      } else {
        throw new Error("Unable to fetch Org Infos");
      }
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  }

  async function loadReqInfo() {
    setIsError(false);
    try {
      let res = await repository.getHelpRequestById(12);
      if (res) {
        setReqData(res);
      } else {
        throw new Error("Unable to fetch Request Infos");
      }
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  }

  React.useLayoutEffect(() => {
    loadReqInfo();
    loadOrgInfo();
  }, []);

  return (
    <div className="flex flex-col align-stretch w-full h-full px-4 pt-4 pb-4">
      {/* Back */}
      <div style={{ flex: 2 }}>
        <BackButton />
      </div>

      {/* title */}
      <div style={{ flex: 2 }} className="h-full">
        {/* to override class css */}
        <h1 style={{ marginBottom: 0 }} className="question font-dm-sans-h1">
          {reqData?.name}
        </h1>
      </div>

      {/* Description */}
      <div style={{ flex: 3 }}>
        <div className="font-inter text-figmaParagraph text-sm">
          Das DRK Bochum sucht fleißige Helfer- und Helferinnen, die uns helfen
          Betten aus einem Hotel in ein Krankenhaus zu transportieren!
        </div>
      </div>

      {/* Overview */}
      <div style={{ flex: 3 }}>
        <Subheading>Überblick</Subheading>
        <div className="font-inter text-figmaParagraph text-sm">
          {reqData?.number_helpers} Helfer gesucht
        </div>
        <div className="font-inter text-figmaParagraph text-sm">
          {reqData?.date_start} Tage
        </div>
      </div>

      {/* Organisation */}
      <div style={{ flex: 3 }}>
        <Subheading>Organisator</Subheading>
        <div className="flex w-full">
          <div style={{ flex: 1 }}>
            <div
              style={{ height: 50, width: 50, overflow: "hidden" }}
              className="rounded-full bg-white min-w-4"
            >
              <img src={require("../../../../assets/helfer.png")} />
            </div>
          </div>
          <div style={{ flex: 3 }} className="flex-col">
            <div className="font-inter text-figmaParagraph font-bold">
              {orgData?.name}
            </div>
            <div className="font-inter text-figmaParagraph text-sm">
              {orgData?.address}
            </div>
          </div>
        </div>
      </div>

      {/* Competences */}
      <div style={{ flex: 5 }}>
        <div>
          <Subheading>Gesuchte Kompetenzen</Subheading>
          <div>
            {reqData?.skills.map((el) => (
              <CheckboxButton color={"red"} text={el.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ flex: 3 }}>
        {/* Ausloggen */}
        <div className="py-2 flex w-full justify-center">
          <button className="flex-1 orange-gradient rounded-full text-white py-2 px-4 ml-0">
            jetzt Hilfe anfordern
          </button>
        </div>

        {/* Löschen */}
        <div className="py-2 flex w-full justify-center">
          <button className="flex-1 bg-white text-figmaOrange border-figmaOrange border-2 rounded-full py-1 px-3">
            Anzeige stoppen
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
