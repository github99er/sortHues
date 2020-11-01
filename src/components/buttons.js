import React from "react";
import {
  Redirect,
  Link,
  Route,
  Switch,
  Router,
  BrowserRouter
} from "react-router-dom";
import NewParticle from "particles.js";
import test from "./test.js";
import "../styles.css";

const Buttons = () => {
  return (
    <div>
      <h1 className="header"> Sort and Search! </h1>
    </div>
  );
};

export default Buttons;
