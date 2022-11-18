import React from "react";
import { Link } from "react-router-dom";
import "./Locations.css";

export let selectedLocation; //export selected location

class Locations extends React.Component {
  
    render() {
      return (
        <div>
          <div id="container">
            <h1 id="item-a" name="location1">Location 1</h1>
            <h3 id="item-b">2 Appointsments Available</h3>
            <p id="item-c">1.1  Miles away</p>
          <Link to="/times">
            <button type="button" onClick={() => selectedLocation = document.getElementsByName('location1')[0].textContent}>Select</button>
          </Link>
          </div>
          <div id="container">
            <h1 id="item-a" name="location2">Location 2</h1>
            <h3 id="item-b">1 Appointsments Available</h3>
            <p id="item-c">5.2  Miles away</p>
            <Link to="/times">
            <button type="button" onClick={() => selectedLocation = document.getElementsByName('location2')[0].textContent}>Select</button>
          </Link>
          </div>
          <div id="container">
            <h1 id="item-a" name="location3">Location 3</h1>
            <h3 id="item-b">6 Appointsments Available</h3>
            <p id="item-c">13.8  Miles away</p>
            <Link to="/times">
            <button type="button" onClick={() => selectedLocation = document.getElementsByName('location3')[0].textContent}>Select</button>
          </Link>
          </div>
        </div>
      );
    }
}
  
export default Locations;