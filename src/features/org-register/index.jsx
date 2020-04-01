import React from "react";
import ButtonWithLink from "../../components/ButtonWithLink";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/InputWithLabel";
import "./index.css";

export default function OrgRegister() {
    return(
        //<br/> are for distance to Menu, otherwise overlap
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
        <div class="container-form">

            <QuestionWithLabel question="Hi, wie heißt deine Organisation" label="Schritt 1 von 3"/>
            <InputWithLabel fname="orgname" label="Name"/>
            <ButtonWithLink children="Weiter" link="/org-register2" />
        </div>
        </div>
    );
  }
