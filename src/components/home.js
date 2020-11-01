import React from "react";
import "../styles.css";
import NewParticle from "./particlejs.js";
import Buttons from "./buttons.js";
import ProfilePicture from "./profileCard.js";
import {
  Redirect,
  Link,
  Route,
  Switch,
  Router,
  BrowserRouter
} from "react-router-dom";

export default function Home(props) {
  return (
    <div className="App">
      <div className="particles-js">
        <ProfilePicture />
        <NewParticle />
        <Buttons />
      </div>
      <div className="btext">
        <button onClick={() => props.history.push("/sort")} className="btn">
          {" "}
          Sort{" "}
        </button>
        <button onClick={() => props.history.push("/search")} className="btn">
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
}
