import React from "react";
import "./styles.css";
import {
  sun,
  mountain4,
  mountain3,
  mountain2,
  mountain1,
  city5,
  city4,
  city3,
  city2,
  city1,
} from "./svg";

const DenverSkyline = () => {
  return (
    <div id="denver-parallax">
      <div id="parallax" class="parallax">
        <div class="group">
          {sun}
          {mountain4}
          {mountain3}
          {mountain2}
          {mountain1}
          {city5}
          {city4}
          {city3}
          {city2}
          {city1}
        </div>
      </div>
    </div>
  );
};
export default DenverSkyline;
