import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import "normalize.css";
import "./styles.css";

const mountNode = document.getElementById("app");
render(<App />, mountNode, mountNode.lastChild);
