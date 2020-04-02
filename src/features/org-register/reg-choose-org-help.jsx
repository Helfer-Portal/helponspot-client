import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import "./register1.css";
import FullHeightLayout from "./components/full-height-layout";
import UserCard from "./components/UserCard";

const cardData = [
    {
        title: "Ich möchte helfen!",
        p: "Ich bin fit und besitze Kompetenzen, die sich als nützlich erweisen könnten!",
        list: ['Grundausbildungen', 'körperlich fit', 'Führerschein'],
        img: require('../../assets/super_dad_1.png'),
        to: '/',
    },
    {
        title: "Wir benötigen Hilfe",
        p: "Es gibt eine Krisensituatuon und wir brauchen helfende Hände!",
        list: ['Vereine', 'Institutionen', 'DLRG, DRK...'],
        img: require('../../assets/team_work_1.png'),
        to: 'org-register2'
    }
]

export default function RegChooseType() {
  return (
    <FullHeightLayout>
      <QuestionWithLabel
        question="Wie benutzt Du HelpOnSpot"
        label="Schritt 2 von 3"
      />
      <div className="flex flex-row w-full">
        {
            cardData.map(el => {
                return <UserCard {... el} />
            })
        }
        
      </div>
    </FullHeightLayout>
  );
}
