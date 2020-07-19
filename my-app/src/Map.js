import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./App.css";

import MapChart from "./MapChart";

function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
    <div className="instructions"> Hover over your county to see the number of COVID-19 cases where you are. The yellow zones have a low number cases and the red zones have a higher number of cases.</div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map; 
