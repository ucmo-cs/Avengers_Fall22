import React from "react";
import "./Aptmnt_navbar.css";
import Times from "./Times"; // Change to import all pages when they exist.

function Aptmnt_navbar(props) {
    return (
        <>
            <ul>
                <li>
                    {/* Image button */}
                    <button id="img_btn">
                        <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/8Q5MX4/53/2f/54/532f5456326a498990ea2620a7eed702/images/times/u32.jpg?pageId=6aa7ecff-1dd9-4d6c-8bdd-7868752c1c7a" alt=""/>
                    </button>
                </li>
                <li>
                    {/* Services */}
                    <button>
                        Services
                    </button>
                </li>
                <li>
                    {/* Locations */}
                    <button>
                        Locations
                    </button>
                </li>
                <li>
                    {/* Times */}
                    <button>
                        Times
                    </button>
                </li>
                <li>
                    {/* Details */}
                    <button>
                        More Details
                    </button>
                </li>
            </ul>

            {/* Hero image. Title can be customized. */}
            <h1 id="hero_img">{props.title}</h1>
        </>
    );
}

export default Aptmnt_navbar;