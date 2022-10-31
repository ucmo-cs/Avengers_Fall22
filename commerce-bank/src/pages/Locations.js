import React from "react";
import "./Locations.css";

class Locations extends React.Component {
    handleClick = () => {console.log("Works")}
    render() {
      return (
        <div>
          <div id="rectangle">
            <h1>Location 1</h1>
            <button onClick={this.handleClick}>Select</button>
          </div>
          <div id="rectangle">
            <h1>Location 2</h1>
            <button onClick={this.handleClick}>Select</button>
          </div>
          <div id="rectangle">
            <h1>Location 3</h1>
            <button onClick={this.handleClick}>Select</button>
          </div>
        </div>
      );
    }
}
  
export default Locations;