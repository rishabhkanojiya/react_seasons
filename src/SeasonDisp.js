import "./SeasonDisp.css";
import React from "react";

const sesConfig = {
  Summer: {
    text: "Let's Hit the beach",
    icn: "sun"
  },
  Winter: {
    text: "burr, its chilly",
    icn: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisp = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icn } = sesConfig[season];
  return (
    <div className={`season-disp ${season}`}>
      <i className={`ic-left fa fa-${icn}-o fa-5x`} aria-hidden="true" />
      <h1>{text}</h1>
      <i className={`ic-right fa fa-${icn}-o fa-5x`} aria-hidden="true" />
    </div>
  );
};

export default SeasonDisp;
