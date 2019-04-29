import "./App.css";

import React, { useEffect } from "react";

import CardList from "./components/CardList";
import ConnectedAppBar from "./state/containers/ConnectedAppBar";
import Paper from "@material-ui/core/Paper";

const App = ({ cats, fetchCatsWithRedux }) => {
  useEffect(() => {
    const initCats = async () =>
      await fetchCatsWithRedux(
        "https://api.thecatapi.com/v1/images/search?limit=9"
      );

    initCats();
  }, [fetchCatsWithRedux]);

  return (
    <Paper elevation={0}>
      <ConnectedAppBar locations={["locations"]} />
      {cats.cats.length > 0 ? (
        <CardList cards={cats} location={"location"} />
      ) : (
        ""
      )}
    </Paper>
  );
};

export default App;
