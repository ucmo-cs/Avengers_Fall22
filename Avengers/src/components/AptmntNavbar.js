import React from "react";
import {Outlet, Link} from "react-router-dom";
import "./AptmntNavbar.css";

function AptmntNavbar({updateState}) {
    return (
        <>
            {/* Use Links to make the buttons work. */}
            <nav>
                <ul>
                    <li>
                        {/* Image button */}
                        <Link id="img_btn" to="/">
                            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/8Q5MX4/53/2f/54/532f5456326a498990ea2620a7eed702/images/times/u32.jpg?pageId=6aa7ecff-1dd9-4d6c-8bdd-7868752c1c7a" alt=""/>
                        </Link>
                    </li>
                    <li>
                        {/* Services */}
                        <div id = "nav" onClick={(e) => {updateState(e, 0)}}>
                        Services
                        </div>  
                    </li>
                    <li>
                        {/* Locations */}
                        <div id = "nav" onClick={(e) => {updateState(e, 1)}}>  
                            Locations
                        </div>
                    </li>
                    <li>
                        {/* Times */}
                        <div id = "nav" onClick={(e) => {updateState(e, 2)}}>
                        Times
                        </div> 
                            
                         
                    </li>
                    <li>
                        {/* Details */}
                        <div id = "nav" onClick={(e) => {updateState(e, 3)}}>
                            More Details
                        </div>
                         
                    </li>
                </ul>
            </nav>
            
             
        </>
    );
}

export default AptmntNavbar;