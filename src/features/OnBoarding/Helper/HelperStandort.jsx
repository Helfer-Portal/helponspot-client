import QuestionWithLabel from "../../../components/QuestionWithLabel";
import UserCard from "../../ChooseUserType/UserCard";
import React from "react";
import Competences from "../../CreateRequest/Competences";
import ButtonWithLink from "../../../components/ButtonWithLink";
import InputWithLabel from "../../../components/InputWithLabel";
import {Subheading} from "../../../components/Subheading";
import {Link} from "react-router-dom";

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
            <div style={{"flexBasis":"10%" }}  className="w-full flex flex-row justify-start flex-grow-0">
                <div style={{"flexBasis":"50%"}}>
                <Link to="/home">
                    <button
                    className="orange_button_noheight py-2 flex-grow-0 "

                >
                    ja, bitte!
                </button>
                </Link>
                </div>
                <button style={{"flexBasis":"50%"}}
                        className="white_button_red_font_noheight py-2 flex-grow-0"
                        onClick={() => alert("was machen wir hier?")}
                >
                    vorerst nicht
                </button>

            </div>

        </div>
    );
}
