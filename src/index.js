import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components";
// import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
