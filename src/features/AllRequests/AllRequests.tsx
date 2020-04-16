import React, { useState } from "react";
import Chance from "chance";
import { Link } from "react-router-dom";

import RepositoryImpl from "../../repository/repository";
import { HelpRequest } from "../../repository/model/helprequest";
import { InformationalBadge, BadgeType } from "../../components/UiKit";

// mock
const chance = new Chance();

const ERROR_MESSAGE =
  "Da ist etwas schiefgelaufen, die Request scheint nicht in der Datenbank zu existieren";

/** View which shows all requests by an Organization */
export default function AllRequests() {
  const repository = new RepositoryImpl();
  const [isError, setIsError] = useState<boolean>(false);
  const [reqData, setReqData] = useState<HelpRequest[]>([]);

  async function loadReqInfo(): Promise<void> {
    setIsError(false);
    try {
      let res = await repository.getHelpRequests();
      if (res) {
        setReqData(res);
      } else {
        throw new Error("Unable to fetch All Requests");
      }
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  }

  React.useLayoutEffect(() => {
    const loadData = async () => {
      await loadReqInfo();
    };
    loadData();
  }, []);

  const success = (
    <div className="bg-bluePrimary flex flex-col w-full h-full px-8 py-4 pt-8 w-full ">
      <div style={{ flex: 1 }}>
        <h1 className="question font-dm-sans-h1">Deine Anzeigen</h1>
      </div>

      <div style={{ flex: 1 }}>
        <div className="px-3 py-1 inline-flex text-white bg-figmaOrange rounded-lg text-xs">
          {reqData?.length} laufen
        </div>
      </div>

      <div
        style={{ flex: 10 }}
        className="flex flex-col  overflow-y-auto scrolling-touch"
      >
        {reqData?.map((el) => (
          <ReqCard {...el} />
        ))}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {isError ? <div>{ERROR_MESSAGE}</div> : success}{" "}
    </React.Fragment>
  );
}

/** single card layout representing one Request */
const ReqCard = (props: HelpRequest) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg my-4">
      <Link to={`../organisation/request/details/${props.id}`}>
        <div>
          <h5 className="font-dm-sans font-bold text-figmaDescription">
            {props.name}
          </h5>
        </div>
      </Link>

      <div className="flex">
        <div>
          <p className="font-inter text-figmaParagraph">Dauer</p>
        </div>
        <div>
          <p className="font-inter text-figmaParagraph">&nbsp; | &nbsp;</p>
        </div>
        <div>
          <p className="font-inter text-figmaParagraph">
            {props.requested_helpers.length} Teilnehmer
          </p>
        </div>
      </div>

      <div className="mt-4">
        {chance.bool() ? (
          <InformationalBadge badgeType={BadgeType.confirm} />
        ) : (
          <InformationalBadge badgeType={BadgeType.information} />
        )}
      </div>
    </div>
  );
};
