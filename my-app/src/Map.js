import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./App.css";

import MapChart from "./MapChart";

function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
    <div className="instructions"> Hover over your county to see the number of COVID-19 cases where you live! If your county is yellow, it means there is a low number cases! If your county is red then you have a high number of cases! Have fun exploring the different parts of the US!</div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map; 
