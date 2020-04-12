import React from "react";
import ButtonIcon from "./ButtonIcon";

const ButtonIconBlue = ({ icon }: { icon: JSX.Element }) => (
  <ButtonIcon
    icon={icon}
    style={{ background: "linear-gradient(90deg, #FAAD98 0%, #F88478 100%)" }}
  />
);

export default ButtonIconBlue;
