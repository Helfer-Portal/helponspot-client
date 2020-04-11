import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";

import "../../styles/organisation.css";
import Competences from "./Competences";
import {
  RequestFormContext,
  RequestForm,
} from "../../context/RequestFormStore";
import { Redirect } from "react-router-dom";
import Counter from "./Counter";

import HelperMap from "../HelperMap/HelperMap";
import BackButton from "../../components/BackButton";
import ButtonPrimaryBlue from "../../components/ButtonPrimaryBlue";

export default function CreateRequest() {
  let [redirect, setRedirect] = React.useState<boolean>(false);

  let [data, setData] = React.useContext<RequestForm | any>(RequestFormContext);

  // Modal
  let [modal, setModal] = React.useState<boolean>(false);

  // scroll ref on map click
  const myContainerRef = React.useRef<HTMLDivElement | null>(null);

  const showMap = (): void => {
    if (myContainerRef && myContainerRef.current) {
      ((containerRef) => {
        containerRef.current.scrollTo(0, 0);
      })(myContainerRef);
      setModal(!modal);
    }
  };

  const updateTitle = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({ ...data, title: e.currentTarget.value });
  };

  const updateStreet = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({ ...data, street: e.currentTarget.value });
  };

  const updateTown = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({ ...data, town: e.currentTarget.value });
  };

  const updateDate = (e: React.FormEvent<HTMLInputElement>): void => {
    let diff = datediff(Date.now(), new Date(e.currentTarget.value));
    setData({ ...data, date: e.currentTarget.value, dateDiff: diff });
  };

  /** thank you Stackoverflow https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript */
  function datediff(first: any, second: any): number {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  const updateCount = (count: number) => {
    setData({ ...data, helperNum: count });
  };

  const updateDescription = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({ ...data, description: e.currentTarget.value });
  };

  const addData = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setRedirect(true);
  };

  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col w-full h-full px-8 py-4  overflow-y-auto"
      ref={myContainerRef}
    >
      <div style={{ flex: 1 }} className="flex w-full">
        <BackButton />
      </div>
      <QuestionWithLabel question="Anzeige erstellen" label="Schritt 3 von 3" />

      {/* Title */}
      <div>
        <div className="mb-1 text-figmaDescription font-inter">Titel</div>
        <input
          type="text"
          name="name"
          className="p-2"
          value={data?.title ? data.title : ""}
          onChange={updateTitle}
          placeholder={data?.title ? data.title : "z.B. Brauchen Anpacker"}
        />
      </div>

      {/* address */}
      <div className="mt-4">
        <div className="mb-1 text-figmaDescription font-inter">Adresse</div>
        <input
          type="text"
          placeholder="Straße, Nr"
          className="my-1 p-2"
          value={data?.street}
          onChange={updateStreet}
        ></input>
        <input
          value={data?.town}
          onChange={updateTown}
          type="text"
          placeholder="Ort"
          className="my-2 p-2"
        ></input>
      </div>

      {/* Competences */}
      <div className="my-2 flex flex-col align-start">
        <div className="mb-3 text-figmaDescription font-inter">
          Gesuchte Kompetenzen
        </div>
        <div>
          <Competences defaultColorButtons={"#fff"} />
        </div>
      </div>

      {/* Helper Number */}
      <div className="flex flex-col py-2">
        <div className="mb-1 text-figmaDescription font-inter">Helferzahl</div>
        <div className="w-full p-2 flex container-helper-numbers">
          <Counter countState={[data?.helperNum, updateCount]} />
        </div>
      </div>

      {/* map */}
      <MapOverlay modal={modal} showMap={showMap}></MapOverlay>
      <ButtonPrimaryBlue onClick={showMap}>
        Mögliche Helfer anzeigen lassen
      </ButtonPrimaryBlue>

      {/* date */}
      <DatePicker dateState={[data?.date, updateDate]}></DatePicker>

      {/* last textfield */}
      <div className="py-2 w-full flex flex-col">
        <div className="mb-1 text-figmaDescription font-inter">
          Beschreibung
        </div>

        <div className="w-full">
          <input
            style={{ width: "100%" }}
            className="lastQuestion flex"
            type="text"
            placeholder="Wir suchen Menschen, die..."
            value={data?.description}
            onChange={updateDescription}
          />
        </div>
      </div>

      <button
        className="mr-auto lg:mx-0 hover:underline orange-gradient text-white font-bold font-inter rounded-full my-2 py-4 px-8 shadow-lg"
        onClick={addData}
      >
        Anzeige erstellen
      </button>

      {redirect ? <Redirect to="/app/organisation/dashboard"></Redirect> : ""}
    </div>
  );
}

const DatePicker = (props: { dateState: any }) => {
  let [date, updateDate] = props.dateState;
  return (
    <div className="w-full flex flex-col py-4">
      <div className="mb-1 text-figmaDescription font-inter">Zeitraum</div>
      <div>
        <input type="date" value={date} onChange={updateDate}></input>
      </div>
    </div>
  );
};

const MapOverlay = (props: { modal: boolean; showMap: any }) => (
  <div
    style={{
      position: "absolute",
      zIndex: 2,
      // overflow: "hidden",
      height: "100%",
      // minHeight: 1000,
      width: "100%",
      top: 0,
      left: 0,
      visibility: props.modal ? "initial" : "hidden",
    }}
  >
    {/* Info about the Map */}
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        right: "5%",
        width: "60%",
      }}
      className="bg-white my-4 p-1 rounded"
    >
      <h4 className="font-bold font-dm-sans text-md">Was kann ich machen?</h4>
      <p className="font-inter text-sm">
        Durch klicken, können einzelne Helfer vorgemerkt werden.
      </p>
    </div>
    {/* Buttons bottom */}
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        top: "auto",
        left: "auto",
        bottom: "10%",
        width: "100%",
      }}
      className="px-4"
    >
      <button
        className="bg-white rounded-full w-full px-4 py-2 border-black border-2"
        onClick={props.showMap}
      >
        Helfer Einstellungen modifizieren
      </button>
      {/* Use smaller buttons here, to not take away space on the map */}
      <button
        className="orange_button_noheight py-2"
        onClick={() => alert("was machen wir hier?")}
      >
        Alle Helfer einberufen
      </button>
    </div>
    <HelperMap />
  </div>
);
