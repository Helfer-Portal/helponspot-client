import React from "react";
import "../src/scss/tailwind.scss";
import "../src/styles/main.css";

const Layout = ({ children }) => {
  return <div className="px-20 py-10">{children}</div>;
};

export default Layout;
