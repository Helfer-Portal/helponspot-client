import React from "react";
import QuestionWithLabel from "../../../../components/QuestionWithLabel";

import "../../../../styles/organisation.css";
import Competences from "../../../../components/app/competences";
import { ReqContext } from "../../../../context/mock-requests";
import { Redirect } from "react-router-dom";
import Counter from "../../../../components/app/counter";
import CheckboxButton from "../../../../components/CheckboxButton";
import ProfilePic from "../../../../components/ProfilePic";


const options_list = [
  "super",
  "Plasma",
  "Führerschein",
  "medizinische Grundausbildung"
];
const userFirstName = "Max";
const userLastName = "Mustermann";
const userEmail = "maxustermann@gmail.com";
const userPhone = "0156-123245";

// map modal

export default function ProfileUser() {
  let [redirect, setRedirect] = React.useState(false);
  let [options, setOptions] = React.useState(options_list)
  // eslint-disable-next-line no-unused-vars

  let [firstName, setFirstName] = React.useState(userFirstName);
  let [lastName, setLastName] = React.useState(userLastName);
  let [email, setEmail] = React.useState(userEmail);
  let [phone, setPhone] = React.useState(userPhone);



  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col w-full h-full px-8 py-4  overflow-y-auto"
    >
      <div className="my-3 flex flex-row items-center py-2">
        <ProfilePic image="/SampleProfilePic.png"/>
        <div className="flex flex-col">
          <h2>{firstName}</h2>
          <h2> {lastName}</h2>
        </div>


      </div>

      <div className="my-3 flex flex-col align-start py-2">
        <div className="mb-3 text-figmaDescription font-inter">
          Kompetenzen
        </div>
        <div className="flex flex-col w-full">
          <div>
            {options.map(entry => (
                <CheckboxButton color={"red"} text={entry} />
            ))}
          </div>
      </div>

      </div>


      <button
        className="mr-auto lg:mx-0 hover:underline blue-gradient text-white font-bold font-inter rounded-full my-2 py-4 px-8 shadow-lg"
      >
        als Helfer einberufen
      </button>
      <button
          className="mr-auto lg:mx-0 hover:underline orange-gradient text-white font-bold font-inter rounded-full my-2 py-4 px-8 shadow-lg"
      >
        zurück zur Karte
      </button>
      {redirect ? <Redirect to="/app/organisation/dashboard"></Redirect> : ""}
    </div>
  );
}
