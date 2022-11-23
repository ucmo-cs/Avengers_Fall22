import React from "react";
import "./Locations.css";

function Locations({updateLocation}){
  
      return (
        <div>
          <div id="container">
            <h1 name="location1">Location 1</h1>
            <h3>2 Appointsments Available</h3>
            <p id="item-c">1.1  Miles away</p>
            <button type="button" onClick={(e) => {updateLocation(e, document.getElementsByName('location1')[0].textContent)}}>Select</button>
          </div>
        </div>
      );
    }
  
export default Locations;