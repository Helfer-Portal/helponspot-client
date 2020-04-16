import QuestionWithLabel from "../../../components/QuestionWithLabel";
import UserCard from "../../ChooseUserType/UserCard";
import React from "react";
import Competences from "../../CreateRequest/Competences";
import ButtonWithLink from "../../../components/ButtonWithLink";
import InputWithLabel from "../../../components/InputWithLabel";
import {Subheading} from "../../../components/Subheading";

export default function HelperStandort() {
    return (
        <div className="flex flex-col w-full h-full px-8 py-4">
            <div style={{flexBasis:"20%"}}> </div>
            <div className="">
            <QuestionWithLabel
                question="Teile deinen Standort, damit man dich schneller findet!"
                label="Schritt 3 von 3"
            />
            </div>
            <div className="flex flex-col w-full">
                <div className="font-inter text-figmaParagraph text-sm">
                    Möchtest du deinen Standort jetzt freigeben?
                </div>
            </div>
            <div style={{ flex: 1 }} className="w-full flex-row justify-around">
                <button
                    className="orange_button_noheight_nowidth py-2"
                    onClick={() => alert("was machen wir hier?")}
                >
                    Alle Helfer einberufen
                </button>
                <ButtonWithLink
                    className="w-1/2"
                    children="Vorerst nicht"
                    link="/app/helfer/createHelper/standort/"
                />
            </div>
        </div>
    );
}
