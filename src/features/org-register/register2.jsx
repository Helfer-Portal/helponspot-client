import React from "react";
import ButtonOrange from "../../components/ButtonOrange";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/InputWithLabel";
import "./index.css";

export default function OrgRegister2() {
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
        <div class="container-form">

            <QuestionWithLabel question="Wo befindet ihr euch" label="Schritt 2 von 3"/>
            <InputWithLabel fname="orglocation" label="Standort"/>
            <ButtonOrange children="Weiter" />
        </div>
        </div>
    );
  }
