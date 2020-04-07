import React from "react";
import { NavLink } from "react-router-dom";

interface TabProps {
  to: string;
  label: string;
}

/** single Tab */
const Tab = ({ to, label }: TabProps) => {
  const url_base = "/app/organisation/";
  return (
    <div style={{ flex: 1 }} className="flex  justify-center items-center">
      <div>
        <NavLink to={url_base + to} activeClassName="tab-link bg-black">
          <div
            style={{ color: "#F58576" }}
            className="text-sm font-inter text-center"
          >
            <div style={{ display: "inline-flex" }} className="">
              {/* TODO: include Icons */}
              *icon
            </div>
            <div className="hidden ml-2" id="tab-label">
              {label}
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

const TabBar = () => {
  return (
    <div
      style={{ position: "relative", height: 55, width: 365 }}
      className="bg-white flex border-t-2"
    >
      <Tab to={"dashboard"} label={"Dashboard"} />
      <Tab to={"request"} label={"Anzeige"} />
      <Tab to={"map"} label={"Karte"} />
      <Tab to={"profile"} label={"Profil"} />
    </div>
  );
};

export default TabBar;
