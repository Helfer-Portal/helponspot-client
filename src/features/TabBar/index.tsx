import React from "react";
import { NavLink, Redirect, useLocation } from "react-router-dom";
import { DashboardIcon, ReqIcon, MapIcon, ProfileIcon } from "./icons";
import {
  AuthorizationContext,
  UserRole,
} from "../../context/AuthorizationStore";
import { ButtonPrimaryBlue } from "../../components/UiKit";

interface TabProps {
  to: string;
  label: string;
  icon: JSX.Element;
}

/** single Tab */
const Tab = ({ to, label, icon }: TabProps) => {
  const [data, setData] = React.useContext(AuthorizationContext);
  const [url_base, setUrlBase] = React.useState<String>();

  React.useEffect(() => {
    if (data.role == UserRole.organisation) {
      setUrlBase("/app/organisation/");
    } else if (data.role == UserRole.helper) {
      setUrlBase("/app/helper/");
    }
  });

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
  const [data, setData] = React.useContext(AuthorizationContext);

  const location = useLocation();

  const [redirect, setRedirect] = React.useState<boolean>(false);

  const [redirURL, setRedirURL] = React.useState<string>(location.pathname);

  /** changes the users authorization role */
  const changeRole = async () => {
    switch (data.role) {
      case UserRole.helper:
        setData({ ...data, role: UserRole.organisation });
        setRedirURL(location.pathname.replace("helper", "organisation"));
        break;
      case UserRole.organisation:
        setData({ ...data, role: UserRole.helper });
        setRedirURL(location.pathname.replace("organisation", "helper"));
        break;
      default:
        break;
    }
    setRedirect(true);
  };

  return (
    <>
      <div
        style={{ position: "relative", height: 55, width: 365 }}
        className="bg-white flex border-t-2"
      >
        <Tab to={"dashboard"} label={"Dashboard"} icon={DashboardIcon} />
        <Tab to={"request"} label={"Anzeige"} icon={ReqIcon} />
        <Tab to={"map"} label={"Karte"} icon={MapIcon} />
        <Tab to={"profile"} label={"Profil"} icon={ProfileIcon} />
      </div>
      <div
        style={{ position: "absolute", top: "50%", left: 0, width: 200 }}
        className="p-2"
      >
        <ButtonPrimaryBlue onClick={changeRole}>change role</ButtonPrimaryBlue>
      </div>
      {redirect && <Redirect to={redirURL} />}
    </>
  );
};

export default TabBar;
