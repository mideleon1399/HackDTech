import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleLinear()
  .domain([0,1])
  .range([
    "#ffedea",
    "#782618"
  ]);

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    csv("/corona.csv").then(counties => {
      setData(counties);
    });
  }, []);

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = data.find(s => s.id === geo.id);
             console.log(cur)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.norm_cases :  '#EEE')}

                />
              );n
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;
