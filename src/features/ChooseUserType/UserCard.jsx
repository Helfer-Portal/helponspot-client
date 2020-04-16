import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(props) {
  const listElements = props.list.map((el) => {
    return <li>*{el}</li>;
  });
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 mx-4 my-2  w-4/5">
      <Link to={props.to}>
        <div className="mb-4 h-1/4">
          <h4 className="text-figmaDescription font-bold font-dm-sans">
            {props.title}
          </h4>
        </div>
        <div className="h-1/4">
          <p className="text-figmaParagraph font-inter">{props.p}</p>
        </div>
        <div className="h-2/4 flex flex-row">
          <div style={{ flex: 2 }} className="pt-4 text-figmaParagraph">
            <ul className="list-disc">{listElements}</ul>
          </div>
          <div style={{ flex: 1 }}>
            <img src={props.img} alt={props.alt} />
          </div>
        </div>
      </Link>
    </div>
  );
}
