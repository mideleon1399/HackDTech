import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile} from "d3-scale";
import { csv } from "d3-fetch";
import ReactTooltip from "react-tooltip";
import './App.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

 const colorScale = scaleQuantile()
  .domain([0,197, 0.001])
  .range(["#2c7bb6", "#00a6ca","#00ccbc","#90eb9d","#ffff8c",
            "#f9d057","#f29e2e","#e76818","#d7191c"]);


const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

const [content, setContent] = useState("");

  
  useEffect(() => {
    // https://www.bls.gov/lau/
    csv("/corona.csv").then(counties => {
      setData(counties);
    });
  }, []);

  return (
    <>
    
      <ComposableMap projection="geoAlbersUsa" data-tip="" >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = data.find(s => s.id === geo.id);
             console.log(cur)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${cur.county} , ${cur.state} - ${cur.cases}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  fill={colorScale(cur ? cur.cases : ' #ffedea"')}
                  style={{hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"}}}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <ReactTooltip>{content}</ReactTooltip>

    </>
  );
};

export default MapChart;
