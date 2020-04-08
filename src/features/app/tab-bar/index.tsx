import React from "react";
import { NavLink } from "react-router-dom";
import {
  DashboardIcon,
  ReqIcon,
  MapIcon,
  ProfileIcon,
} from "./components/icons";

interface TabProps {
  to: string;
  label: string;
  icon: JSX.Element;
}

/** single Tab */
const Tab = ({ to, label, icon }: TabProps) => {
  const url_base = "/app/organisation/";
  return (
    <div style={{ flex: 1 }} className="flex px-2 justify-center items-center">
      <div>
        <NavLink to={url_base + to} activeClassName="tab-link bg-black">
          <div
            style={{ color: "#F58576" }}
            className="p-3 text-xs font-inter text-center flex font-bold"
          >
            <div style={{ display: "flex" }} className="">
              {/* TODO: include Icons */}
              {icon}
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
      <Tab to={"dashboard"} label={"Dashboard"} icon={DashboardIcon} />
      <Tab to={"request"} label={"Anzeige"} icon={ReqIcon} />
      <Tab to={"map"} label={"Karte"} icon={MapIcon} />
      <Tab to={"profile"} label={"Profil"} icon={ProfileIcon} />
    </div>
  );
};

export default TabBar;
