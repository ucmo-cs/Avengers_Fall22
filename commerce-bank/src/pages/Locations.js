import React from "react";
import { Link } from "react-router-dom";
import "./Locations.css";

class Locations extends React.Component {
    handleClick = () => {console.log("Works")}
    render() {
      return (
        <div>
          <div id="rectangle">
            <h1>Location 1</h1>
          <Link to="/times">
            <button>Select</button>
          </Link>
          </div>
          <div id="rectangle">
            <h1>Location 2</h1>
            <Link to="/times">
            <button>Select</button>
          </Link>
          </div>
          <div id="rectangle">
            <h1>Location 3</h1>
            <Link to="/times">
            <button>Select</button>
          </Link>
          </div>
        </div>
      );
    }
}
  
export default Locations;