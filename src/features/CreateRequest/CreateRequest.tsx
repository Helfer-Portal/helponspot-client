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
import { ButtonPrimaryBlue, InputWithLabel } from "../../components/UiKit";
import ButtonPrimaryOrange from "../../components/UiKit/ButtonPrimaryOrange";
import { useForm } from "react-hook-form";
import {
  PostAddress,
  PostRequest,
  UUID,
} from "../../repository/model/helprequest";
import { AuthorizationContext } from "../../context/AuthorizationStore";
import RepositoryImpl from "../../repository/repository";

type Inputs = PostRequest & PostAddress;

export default function CreateRequest() {
  let [redirect, setRedirect] = React.useState<boolean>(false);

  const { handleSubmit, register, reset, errors } = useForm<Inputs>();

  let [data, setData] = React.useContext<RequestForm | any>(RequestFormContext);

  // Modal
  let [modal, setModal] = React.useState<boolean>(false);

  let [orgUUID, setOrgUUID] = React.useState<UUID>("");

  const [authInfo] = React.useContext(AuthorizationContext);

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

  React.useEffect(() => {
    if (authInfo.orgUUIDs) {
      setOrgUUID(authInfo.orgUUIDs[0]);
    }
  }, [authInfo.orgUUIDs]);

  const postRequestData = async (reqData: Inputs) => {
    let { title, description, startDate, endDate, ...address } = reqData;
    let payload: PostRequest = {
      title,
      description,
      startDate,
      endDate,
      address: address,
      isActive: true,
      qualifications: data.selected_competences?.map((el) => el.key),
    };
    console.log(payload);
    let repository = new RepositoryImpl();
    if (orgUUID) {
      let res = await repository.postRequest(orgUUID, payload);
      console.log(res);
    }
  };

  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col w-full h-full px-8 py-4 overflow-y-auto"
      ref={myContainerRef}
    >
      <div style={{ flex: 1 }} className="flex w-full">
        <BackButton />
      </div>
      <QuestionWithLabel question="Anzeige erstellen" label="Schritt 3 von 3" />
      <form
        style={{ flex: 1 }}
        className="w-full"
        onSubmit={handleSubmit(postRequestData)}
      >
        {/* Title */}
        <div>
          <div className="mb-1 text-figmaDescription font-inter">Titel</div>
          <InputWithLabel
            placeholder={"Titel"}
            name="title"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "invalid street",
              },
            })}
          />
        </div>

        {/* address */}
        <div className="mt-4">
          <div className="mb-1 text-figmaDescription font-inter">Adresse</div>
          <div>
            <InputWithLabel
              placeholder={"Straße"}
              name="street"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "invalid street",
                },
              })}
            />
            <InputWithLabel
              placeholder={"Hausnummer"}
              name="houseNumber"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "invalid Housenumber",
                },
              })}
            />
            <InputWithLabel
              placeholder={"Plz"}
              name="postalCode"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "invalid Postal number",
                },
              })}
            />
            <InputWithLabel
              placeholder={"Stadt"}
              name="city"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[a-zA-z]+$/i,
                  message: "invalid Stadt",
                },
              })}
            />
            <InputWithLabel
              placeholder={"Land"}
              name="country"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[a-zA-z]+$/i,
                  message: "invalid Land",
                },
              })}
            />
          </div>
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

        {/* Helper Number
      <div className="flex flex-col py-2">
        <div className="mb-1 text-figmaDescription font-inter">Helferzahl</div>
        <div className="w-full p-2 flex container-helper-numbers">
          <Counter countState={[data?.helperNum, updateCount]} />
        </div>
      </div> */}

        {/* map
      <MapOverlay modal={modal} showMap={showMap}></MapOverlay>
      <ButtonPrimaryBlue onClick={showMap}>
        Mögliche Helfer anzeigen lassen
      </ButtonPrimaryBlue> */}

        {/* date */}
        {/* <DatePicker dateState={[data?.date, updateDate]}></DatePicker> */}
        <input
          type="date"
          placeholder="startDate"
          name="startDate"
          ref={register}
        />
        <input
          type="date"
          placeholder="endDate"
          name="endDate"
          ref={register}
        />

        {/* last textfield */}
        <div className="py-2 w-full flex flex-col">
          <div className="mb-1 text-figmaDescription font-inter">
            Beschreibung
          </div>

          <div className="w-full">
            <InputWithLabel
              placeholder={"Beschreibung"}
              name="description"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[a-zA-z\s]+$/i,
                  message: "invalid Beschreibung",
                },
              })}
            />
          </div>
        </div>
        <div className="my-2">
          <ButtonPrimaryOrange type="submit">Bestätigen</ButtonPrimaryOrange>
        </div>

        <ButtonPrimaryOrange>Anzeige erstellen</ButtonPrimaryOrange>

        {redirect ? <Redirect to="/app/organisation/dashboard"></Redirect> : ""}
      </form>
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

// const MapOverlay = (props: { modal: boolean; showMap: any }) => (
//   <div
//     style={{
//       position: "absolute",
//       zIndex: 2,
//       // overflow: "hidden",
//       height: "100%",
//       // minHeight: 1000,
//       width: "100%",
//       top: 0,
//       left: 0,
//       visibility: props.modal ? "initial" : "hidden",
//     }}
//   >
//     {/* Info about the Map */}
//     <div
//       style={{
//         position: "absolute",
//         zIndex: 1,
//         right: "5%",
//         width: "60%",
//       }}
//       className="bg-white my-4 p-1 rounded"
//     >
//       <h4 className="font-bold font-dm-sans text-md">Was kann ich machen?</h4>
//       <p className="font-inter text-sm">
//         Durch klicken, können einzelne Helfer vorgemerkt werden.
//       </p>
//     </div>
//     {/* Buttons bottom */}
//     <div
//       style={{
//         position: "absolute",
//         zIndex: 1,
//         top: "auto",
//         left: "auto",
//         bottom: "10%",
//         width: "100%",
//       }}
//       className="px-4"
//     >
//       <button
//         className="bg-white rounded-full w-full px-4 py-2 border-black border-2"
//         onClick={props.showMap}
//       >
//         Helfer Einstellungen modifizieren
//       </button>
//       {/* Use smaller buttons here, to not take away space on the map */}
//       <button
//         className="orange_button_noheight py-2"
//         onClick={() => alert("was machen wir hier?")}
//       >
//         Alle Helfer einberufen
//       </button>
//     </div>
//     <HelperMap />
//   </div>
// );
