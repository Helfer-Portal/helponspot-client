import React from "react";
import Button from "../../components/Button";
import "./index.css";

export default function OrgRegister() {
    return(
        <div class="container">

        <overline> Schritt 1 von 3 </overline>
        <h1>Hi, wie heißt deine Organisation</h1>
            <overline>NAME</overline>
            <input type="text" id="orgname" name="orgname"/>
            <Button/>

        </div>
    );
  }
