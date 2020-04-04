import React from "react";
import { NavLink } from "react-router-dom";

// export interface Props {
//     to: string,
//     children: any,
// }

/**
 * Link elements in the Menu bar
 */
export default function MenuLink(props) {
  return (
    <NavLink
      exact
      to={props.to}
      activeStyle={{
        fontWeight: "bold",
      }}
      className={"hover:underline"}
      activeClassName={"mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"}
    >
      {props.children}
    </NavLink>
  );
}
