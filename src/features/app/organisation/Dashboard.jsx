import React, { useContext } from "react";
import FullHeightLayoutNoFooter from  "../../../components/app/full-height-layout-no-footer"
import Reactions from "../../../components/app/reactions";
import OpenRequest from "../../../components/app/open-request";
import ReqProvider, { ReqContext } from "../../../context/mock-requests";

const mockData = [
    {
        title: "Helft Tragen und Transportieren",
        timeLast: "5 Tage",
        reqHelpers: 30,
        confirmed: 14,
        denied: 14,
        open: 12
    },
    {
        title: "Blutspender gesucht",
        timeLast: "2 Tage",
        reqHelpers: -1,
        confirmed: 140,
        denied: 0,
        open: 0
    }
];

export default function Dashboard() {
    const [data, setData] = useContext(ReqContext);
    return (
        <ReqProvider>
            <FullHeightLayoutNoFooter>
                <div>
                    <h1 className="question font-dm-sans-h1">
                        Hi DRK Berlin, das gibt's Neues.
                    </h1>
                </div>

                <div>
                    <Reactions reactNum={12} />
                </div>
                {data.map(el => {
                    return <OpenRequest {...el} />;
                })}
            </FullHeightLayoutNoFooter>
        </ReqProvider>
    );
}
{
    /* <div>
                  {mockData.map(el => {
                    return <OpenRequest {...el} />;
                  })}
                </div> */
}
