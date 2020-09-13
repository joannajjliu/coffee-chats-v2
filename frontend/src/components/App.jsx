import React from "react";
import { Container } from "@material-ui/core";
import AddPerson from "./AddPerson";
import CalculatePairs from "./CalculatePairs";
import PersonOnHold from "./PersonOnHold";
import ShowParticipants from "./ShowParticipants";

import "../styles/index.css";

class App extends React.PureComponent {
  render() {
    return (
      <Container className="container">
        <div className="row">
          <AddPerson />
        </div>
        <hr />
        <div className="row my-4">
          <CalculatePairs />
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
}

export default App;
