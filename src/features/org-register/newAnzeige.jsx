import React from "react";
import ButtonOrange from "../../components/ButtonOrange";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/InputWithLabel";
import CheckboxButton from "../../components/CheckboxButton";
import "./register1.css";

const options_list = ["Plasma", "Führerschein", "medizinische Grundausbildung"]
export default function NewAnzeige() {
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
        <div class="container-form">

            <QuestionWithLabel question="Anzeige erstellen" label="Schritt 3 von 3"/>
            <InputWithLabel fname="Titel" label="Titel"/>
            <overlay> Gesuchte Kompetenzen </overlay>
            <div class="container-options">
                {options_list.map( entry =>
                <CheckboxButton text ={entry}/>
                )}
            </div>
        </div>
        </div>
    );
  }
