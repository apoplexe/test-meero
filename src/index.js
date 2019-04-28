import "./index.css";

import { applyMiddleware, createStore } from "redux";

import ConnectedApp from "./state/containers/ConnectedApp";
import { Provider } from "react-redux";
import React from "react";
import moviesApp from "./state/reducers";
import { render } from "react-dom";
import thunk from "redux-thunk";

const store = createStore(moviesApp, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
