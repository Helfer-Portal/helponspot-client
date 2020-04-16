import QuestionWithLabel from "../../../components/QuestionWithLabel";
import UserCard from "../../ChooseUserType/UserCard";
import React from "react";
import Competences from "../../CreateRequest/Competences";
import ButtonWithLink from "../../../components/ButtonWithLink";

export default function HelperSkills() {
    return (
        <div className="flex flex-col w-full h-full px-8 py-4">
            <QuestionWithLabel
                question="Wie kannst du anderen helfen?"
                label="Schritt 1 von 3"
            />
            {/* Competences */}
            <div className="my-2 flex flex-col align-start">
                <div className="mb-3 text-figmaDescription font-inter">
                    Deine Qualifikationen
                </div>
                <div>
                    <Competences defaultColorButtons={"#fff"} />
                </div>
            </div>
            <div style={{ flex: 1 }} className="w-full">
                <ButtonWithLink
                    className="w-full flex justify-center"
                    children="Weiter"
                    link="/app/helfer/createHelper/name/"
                />
            </div>
        </div>
    );
}
