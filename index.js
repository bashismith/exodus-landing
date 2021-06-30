import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import "./styles.css"

// if (module.hot) {
//   module.hot.accept();
// }

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
