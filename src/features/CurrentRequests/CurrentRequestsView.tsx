import React, { useState } from "react";
import Chance from "chance";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import RepositoryImpl from "../../repository/repository";
import {
  HelpRequest,
  OrganizationInfo,
} from "../../repository/model/helprequest";
import {
  InformationalBadge,
  BadgeType,
  SkillBadge,
} from "../../components/UiKit";
import { Subheading } from "../../components/Subheading";
import { AuthorizationContext } from "../../context/AuthorizationStore";
import { Auth } from "aws-amplify";

// mock
const chance = new Chance();

const ERROR_MESSAGE =
  "Da ist etwas schiefgelaufen, die Request scheint nicht in der Datenbank zu existieren";

const CurrentRequestsView = (props) => {
  const repository = new RepositoryImpl();
  const [loading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [reqData, setReqData] = useState<HelpRequest[]>([]);
  const [orgInfo, setOrgInfo] = useState<OrganizationInfo>();

  const [authInfo, setAuthInfo] = React.useContext(AuthorizationContext);

  React.useEffect(() => {
    if (authInfo.useruuid) {
      (async () => {
        try {
          let reqData = await repository.getHelpRequestsForUserId(
            authInfo.useruuid
          );
          if (reqData) {
            setReqData(reqData);
            setLoading(false);
          } else {
            throw new Error("Unable to fetch All Requests");
          }
        } catch (err) {
          setIsError(true);
          console.log(err);
        }
      })();
    }
  }, [authInfo.useruuid]);

  const success = (
    <div className="bg-bluePrimary flex flex-col w-full h-full px-8 py-4 pt-8 w-full ">
      <div style={{ flex: 1 }}>
        <h1 className="question font-dm-sans-h1">Alle Anzeigen</h1>
      </div>

      <div
        style={{ flex: 10 }}
        className="flex flex-col  overflow-y-auto scrolling-touch"
      >
        {loading &&
          Array(20)
            .fill(0)
            .map((_, i) => {
              return <Skeleton />;
            })}
        {(!loading && reqData?.map((el) => <ReqCard {...el} />)) || (
          <Skeleton />
        )}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {isError ? <div>{ERROR_MESSAGE}</div> : success}{" "}
    </React.Fragment>
  );
};

/** single card layout representing one Request for the helpers*/
const ReqCard = (props: HelpRequest) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg my-4">
      {/* Headline */}
      <Link to={`../organisation/request/details/${props.id}`}>
        <div>
          <h5 className="font-dm-sans font-bold text-figmaDescription">
            {props.name || <Skeleton />}
          </h5>
        </div>
      </Link>

      {/* Meta */}
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

      {/* Skills */}
      <div>
        {props.skills.map((el) => (
          <div className="p-1 inline-flex">
            <SkillBadge>{el.name || <Skeleton />}</SkillBadge>
          </div>
        ))}
      </div>

      {/* Organisation */}
      <div className="mt-4">
        <div style={{ flex: 3 }}>
          <Subheading>Organisator</Subheading>
          <div className="flex w-full">
            <div style={{ flex: 1 }}>
              <div
                style={{ height: 50, width: 50, overflow: "hidden" }}
                className="rounded-full bg-white min-w-4"
              >
                <img src={require("../../assets/helfer.png")} />
              </div>
            </div>
            <div style={{ flex: 3 }} className="flex-col">
              <div className="font-inter text-figmaParagraph font-bold">
                {/* {orgData?.name} */}DRK Berlin
              </div>
              <div className="font-inter text-figmaParagraph text-sm">
                {/* {orgData?.address} */} 11 km entfernt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CurrentRequestsView);
