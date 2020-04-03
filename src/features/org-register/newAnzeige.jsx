import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";

import "./register1.css";
import FullHeightLayout from "./components/full-height-layout";
import Competences from "./components/competences";
import { ReqContext } from "../../context/mock-requests";
import { Redirect } from "react-router-dom";
import Counter from "./components/counter";

export default function NewAnzeige() {
  let [redirect, setRedirect] = React.useState(false);

  let [data, setData] = React.useContext(ReqContext);

  let [title, setTitle] = React.useState("");
  let [date, setDate] = React.useState("");
  let [dateDiff, setDateDiff] = React.useState(0);
  let [count, setCount] = React.useState(0);

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const updateDate = e => {
    setDate(e.target.value);
    let diff = datediff(Date.now(), new Date(e.target.value));
    setDateDiff(diff);
  };

  /** thank you Stackoverflow https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript */
  function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  const addData = e => {
    e.preventDefault();
    setData(prevData => [
      {
        title: title,
        timeLast: dateDiff ? dateDiff + " Tage" : "5 Tage",
        reqHelpers: count,
        confirmed: Math.floor(Math.random() * count),
        denied: 0,
        open: 0
      },
      ...prevData
    ]);
    setRedirect(true);
  };

  return (
    <FullHeightLayout>
      <QuestionWithLabel question="Anzeige erstellen" label="Schritt 3 von 3" />
      <div>
        <overline className="label font-inter text-figmaDescription">
          Title
        </overline>
        <input type="text" name="name" value={title} onChange={updateTitle} />
      </div>

      <div className="my-3 flex flex-col align-start">
        <div className="mb-3 text-figmaDescription font-inter">
          Gesuchte Kompetenzen
        </div>
        <div>
          <Competences />
        </div>
      </div>

      <div className="w-full flex" class="container-helper-numbers">
        <Counter countState={[count, setCount]} />
      </div>

      <div className="w-full flex flex-col">
        <div className="mb-3 text-figmaDescription font-inter">Zeitraum</div>
        <div>
          <input type="date" value={date} onChange={updateDate}></input>
        </div>
      </div>

      <div>
        <div className="mb-3 text-figmaDescription font-inter">
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
