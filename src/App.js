import React from "react";
import "./styles.css";
import NewParticle from "./components/particlejs.js";
import Buttons from "./components/buttons.js";
import ProfilePicture from "./components/profileCard.js";
import {
  Redirect,
  Link,
  Route,
  Switch,
  Router,
  BrowserRouter
} from "react-router-dom";
import Home from "./components/home.js";
import test from "./components/test.js";
import sort from "./sort/App.js";
import maze from "./maze/App.js";

export default function App() {
  return (
    <div className="App">
      <Switch>
  {/*<Route component={Home} exact path="/" />*/}
        <Route component={sort} path="/" />
       {/* <Route component={maze} path="/search" />*/}
      </Switch>
    </div>
  );
}
