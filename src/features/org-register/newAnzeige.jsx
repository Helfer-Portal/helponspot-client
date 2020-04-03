import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import Circle from "../../components/Circle";
import "./register1.css";
import FullHeightLayout from "./components/full-height-layout";
import Competences from "./components/competences";
import { ReqContext } from "../../context/mock-requests";
import { Redirect } from "react-router-dom";

export default function NewAnzeige() {
  let [redirect, setRedirect] = React.useState(false);

  let [data, setData] = React.useContext(ReqContext);

  let [title, setTitle] = React.useState("");
  let [date, setDate] = React.useState("");

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const updateDate = e => {
    setDate(e.target.value);
  };

  const addData = e => {
    e.preventDefault();
    setData(prevData => [
      {
        title: title,
        timeLast: Math.floor(Math.random() * 10) + "2 Tage",
        reqHelpers: Math.floor(Math.random() * 10),
        confirmed: Math.floor(Math.random() * 10),
        denied: 0,
        open: 0
      }, ...prevData
    ]);
    setRedirect(true);
  };

  return (
    <FullHeightLayout>
      <QuestionWithLabel question="Anzeige erstellen" label="Schritt 3 von 3" />
      <div>
        <overline className="label font-inter text-figmaDescription">
          Titel
        </overline>
        <br/>
        <input type="text" name="name" value={title} onChange={updateTitle} />
      </div>

      <div className="my-3 flex flex-col align-start py-2">
        <div className="mb-3 text-figmaDescription font-inter">
          Gesuchte Kompetenzen
        </div>
        <div>
          <Competences />
        </div>
      </div>

      <div className="flex flex-col py-2" >
        <overline className="label font-inter text-figmaDescription">
          Helferzahl
        </overline>
      <div className="w-full flex" class="container-helper-numbers">
        <div>
          <Circle image="/minus.png" />
          <div class="number"> 5 </div>
          <Circle image="/plus.png" />
        </div>
          <button class="unlimited">unbegrenzt</button>
      </div>
      </div>
      <div className="w-full flex flex-col py-2">
        <div className="mb-1 text-figmaDescription font-inter">Zeitraum</div>
        <div>
          <input type="date"></input>
        </div>
      </div>

      <div className="py-2">
        <div className="mb-1 text-figmaDescription font-inter">
          Beschreibung
        </div>

        <div>
          <input type="text" placeholder="Wir suchen Menschen, die..."></input>
        </div>
      </div>

      <button onClick={addData}>Anzeige erstellen</button>

      {redirect ? <Redirect to="/all-news"></Redirect> : ""}
    </FullHeightLayout>
  );
}
