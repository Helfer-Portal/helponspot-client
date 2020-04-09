import React, { useContext, useState } from "react";
import { HelpRequest } from "../../repository/model/helprequest";
import RepositoryImpl from "../../repository/repository";

import Chance from "chance";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col w-full h-full px-8 py-4 pt-8 w-full ">
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
          <div
            style={{ backgroundColor: "#EAF3FF", color: "#1661AA" }}
            className="px-3 py-1 inline-flex font-inter text-sm rounded-full"
          >
            {CheckIcon} &nbsp; {chance.integer({ min: 1, max: 100 })} Helfer
            einberufen
          </div>
        ) : (
          <div
            style={{ backgroundColor: "#FDEBDB" }}
            className="px-3 py-1 inline-flex text-figmaOrange font-inter text-sm rounded-full"
          >
            {RejectIcon} &nbsp; noch keine Hilfe einberufen
          </div>
        )}
      </div>
    </div>
  );
};

const CheckIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10L9 12L13 8M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
      stroke="#417AB7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const RejectIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8V12V8ZM12 16H12.01H12ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
      stroke="#F88478"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
