import React from "react";
import QuestionWithLabel from "../../../../components/QuestionWithLabel"

import "../../../../styles/organisation.css";
import Competences from "../../../../components/app/competences";
import { ReqContext } from "../../../../context/mock-requests"
import { Redirect } from "react-router-dom";
import Counter from "../../../../components/app/counter";

export default function CreateRequest() {
    let [redirect, setRedirect] = React.useState(false);

    // eslint-disable-next-line no-unused-vars
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
                confirmed: Math.abs(Math.floor(Math.random() * count)),
                denied: 0,
                open: 0
            },
            ...prevData
        ]);
        setRedirect(true);
    };

    return (
        <div className="flex flex-col w-full h-full px-8 py-4 overflow-y-auto scrolling-touch">
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
                <div className="w-full flex container-helper-numbers">
                    <Counter countState={[count, setCount]} />
                </div>
            </div>
            <div className="w-full flex flex-col py-2">
                <div className="mb-1 text-figmaDescription font-inter">Zeitraum</div>
                <div>
                    <input type="date" value={date} onChange={updateDate}></input>
                </div>
            </div>

            <div className="py-2 w-full flex flex-col">
                <div className="mb-1 text-figmaDescription font-inter">
                    Beschreibung
                </div>

                <div className="w-full">
                    <input style={{width: "100%"}} className="lastQuestion flex" type="text" placeholder="Wir suchen Menschen, die..."/>
                </div>
            </div>

            <button className="mr-auto lg:mx-0 hover:underline orange-gradient text-white font-bold font-inter rounded-full my-2 py-4 px-8 shadow-lg"
                    onClick={addData}>Anzeige erstellen</button>

            {redirect ? <Redirect to="/app/organisation/dashboard"></Redirect> : ""}
        </div>
    );
}