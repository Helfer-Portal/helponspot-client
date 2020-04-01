import React from "react";
import Button from "../../components/Button";
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
            <Button children="Weiter" />
        </div>
        </div>
    );
  }
