import "./index.css";

import ConnectedApp from "./state/containers/ConnectedApp";
import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import moviesApp from "./state/reducers";
import { render } from "react-dom";

const store = createStore(moviesApp);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
