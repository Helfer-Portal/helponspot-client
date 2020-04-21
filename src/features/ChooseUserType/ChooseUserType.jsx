import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import UserCard from "./UserCard";
import BackButton from "../../components/BackButton";

const cardData = [
  {
    title: "Ich möchte helfen!",
    p:
      "Ich bin fit und besitze Kompetenzen, die sich als nützlich erweisen könnten!",
    // list: ['Grundausbildungen', 'körperlich fit', 'Führerschein'],
    list: [],
    img: require("../../assets/super_dad_1.png"),
    to: "/app/helper/createHelper/skills",
    alt: "Ich möchte helfen!",
  },
  {
    title: "Wir benötigen Hilfe",
    p: "Es gibt eine Krisensituatuon und wir brauchen helfende Hände!",
    //list: ['Vereine', 'Institutionen', 'DLRG, DRK...'],
    list: [],
    img: require("../../assets/team_work_1.png"),
    to: "/app/organisation/createOrganisation",
    alt: "Ich möchte hifle suchen!",
  },
];

export default function ChooseUserType() {
  return (
    <div className="flex flex-col bg-bluePrimary h-full w-full px-4 py-4">
      <div style={{ flex: 1 }}>
        <BackButton />
      </div>
      <div style={{ flex: 1 }}>
        <QuestionWithLabel question="Wie benutzt Du HelpOnSpot" label="" />
      </div>
      <div style={{ flex: 3 }} className="flex flex-col w-full">
        {cardData.map((el) => {
          return <UserCard {...el} />;
        })}
      </div>
    </div>
  );
}
