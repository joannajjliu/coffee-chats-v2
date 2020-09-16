import React, {useState, useEffect} from "react";
import i18n from "../shared/i18n";
import { useTranslation, Trans } from "react-i18next";

import { Container } from "@material-ui/core";

import AddPerson from "./AddPerson";
import CalculatePairs from "./CalculatePairs";
import PersonOnHold from "./PersonOnHold";
import ShowParticipants from "./ShowParticipants";


import "../styles/index.css";

export default function App() {
  const { t, i18n } = useTranslation();
  const [apiResponse, setApiResponse] = useState("")
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    callAPI()
  }, [])
  
  function callAPI() {
    fetch("http://localhost:9000/testAPI/people")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }

  return (
      <Container className="container">
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("fr")}>fr</button>
        {/* <p>{apiResponse}</p> */}
        <div className="row">
          <AddPerson />
        </div>
        <hr />
        <div className="row my-4">
          <Trans>
            <CalculatePairs />
          </Trans>
        </div>
        <hr />
        <div className="row my-4">
          <PersonOnHold />
        </div>
        <hr />
        <ShowParticipants />
      </Container>
  );
}
