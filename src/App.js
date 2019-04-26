import "./app.css";

import CardList from "./components/CardList";
import ConnectedAppBar from "./state/containers/ConnectedAppBar";
import Paper from "@material-ui/core/Paper";
import React from "react";

const app = ({ cardsList: { cards, locations, location } }) => (
  <Paper elevation={0}>
    <ConnectedAppBar locations={locations} />
    <CardList cards={cards} location={location} />
  </Paper>
);

export default app;
