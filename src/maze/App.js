import React from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import Navbar from "./Navbar";

function maze() {
  return (
    <div className="App">
      <body>
        <PathfindingVisualizer />
      </body>
    </div>
  );
}

export default maze;
