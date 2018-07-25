import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/App.css";
import "./css/fonts.css";
import "./css/main.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
