import React from "react";
import "./Locations.css";

function Locations({updateLocation}){
  
      return (
        <div>
          <div id="container">
            <h1 name="Lees Summit">Lees Summit</h1>
            <h3>2 Appointsments Available</h3>
            <p id="item-c">1.1  Miles away</p>
            <button type="button" onClick={(e) => {updateLocation(e, document.getElementsByName('Lees Summit')[0].textContent)}}>Select</button>
          </div>
        <div id="container">
            <h1 name="Harrisonville">Harrisonville</h1>
            <h3>7 Appointsments Available</h3>
            <p id="item-c">7.4  Miles away</p>
            <button type="button" onClick={(e) => {updateLocation(e, document.getElementsByName('Harrisonville')[0].textContent)}}>Select</button>
          </div>
        <div id="container">
            <h1 name="Blue Springs">Blue Springs</h1>
            <h3>5 Appointsments Available</h3>
            <p id="item-c">13.1  Miles away</p>
            <button type="button" onClick={(e) => {updateLocation(e, document.getElementsByName('Blue Springs')[0].textContent)}}>Select</button>
          </div>
        </div>
      );
    }
  
export default Locations;
