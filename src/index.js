import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./css/App.css";
import "./css/fonts.css";
import "./css/main.css";
import store from "./store/index";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  target
);
