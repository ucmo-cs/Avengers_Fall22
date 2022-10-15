import React from "react";
import "./Aptmnt_navbar.css";

function Aptmnt_navbar(props) {
    return (
        <>
            <ul>
                <li>
                    {/* Image button */}
                    <a id="img_btn">
                        <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/8Q5MX4/53/2f/54/532f5456326a498990ea2620a7eed702/images/times/u32.jpg?pageId=6aa7ecff-1dd9-4d6c-8bdd-7868752c1c7a"/>
                    </a>
                </li>
                <li>
                    {/* Services */}
                    <a>
                        Services
                    </a>
                </li>
                <li>
                    {/* Locations */}
                    <a>
                        Locations
                    </a>
                </li>
                <li>
                    {/* Times */}
                    <a>
                        Times
                    </a>
                </li>
                <li>
                    {/* Details */}
                    <a>
                        More Details
                    </a>
                </li>
            </ul>

            {/* Hero image. Title can be customized. */}
            <h1 id="hero_img">{props.title}</h1>
        </>
    );
}

export default Aptmnt_navbar;