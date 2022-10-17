import React from "react";
import {Outlet, Link} from "react-router-dom";
import "./AptmntNavbar.css";

function AptmntNavbar(props) {
    return (
        <>
            {/* Use Links to make the buttons work. */}
            <nav>
                <ul>
                    <li>
                        {/* Image button */}
                        <Link id="img_btn">
                            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/8Q5MX4/53/2f/54/532f5456326a498990ea2620a7eed702/images/times/u32.jpg?pageId=6aa7ecff-1dd9-4d6c-8bdd-7868752c1c7a"/>
                        </Link>
                    </li>
                    <li>
                        {/* Services */}
                        <Link>
                            Services
                        </Link>
                    </li>
                    <li>
                        {/* Locations */}
                        <Link>
                            Locations
                        </Link>
                    </li>
                    <li>
                        {/* Times */}
                        <Link>
                            Times
                        </Link>
                    </li>
                    <li>
                        {/* Details */}
                        <Link>
                            More Details
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Hero image. Title can be customized. */}
            <h1 id="hero_img">{props.title}</h1>
            
            <Outlet/>
        </>
    );
}

export default AptmntNavbar;