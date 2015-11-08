
// Shared css files.
require("./styles/main.scss");

import * as ReactDOM from "react-dom";
import * as React from "react";

import {App} from "./containers";

window.addEventListener("load", (e) => {
    ReactDOM.render(<App />, document.querySelector("#root"));
});