import React from "react";
import { Link } from "react-router-dom";
import "./Locations.css";

class Locations extends React.Component {
    handleClick = () => {console.log("Works")}
    render() {
      return (
        <div>
          <div id="container">
            <h1 id="item-a">Location 1</h1>
            <h3 id="item-b">2 Appointsments Available</h3>
            <p id="item-c">1.1  Miles away</p>
          <Link to="/times">
            <button type="button">Select</button>
          </Link>
          </div>
          <div id="container">
            <h1 id="item-a">Location 2</h1>
            <h3 id="item-b">1 Appointsments Available</h3>
            <p id="item-c">5.2  Miles away</p>
            <Link to="/times">
            <button type="button">Select</button>
          </Link>
          </div>
          <div id="container">
            <h1 id="item-a">Location 3</h1>
            <h3 id="item-b">6 Appointsments Available</h3>
            <p id="item-c">13.8  Miles away</p>
            <Link to="/times">
            <button type="button">Select</button>
          </Link>
          </div>
        </div>
      );
    }
}
  
export default Locations;