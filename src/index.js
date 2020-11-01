import React from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Link,
  Route,
  Switch,
  Router,
  BrowserRouter
} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
