import React from "react";
import ButtonIcon from "./ButtonIcon";

const ButtonIconBlue = ({ icon }: { icon: JSX.Element }) => (
  <ButtonIcon
    icon={icon}
    style={{ background: "linear-gradient(270deg, #5E94CD 0%, #81B3E3 100%)" }}
  />
);

export default ButtonIconBlue;
