import React from "react";

function Details() {
    return (
        <>
            {/* Hero image. */}
            <h1 id="hero_img">Just A Few More Details</h1>

            {/* The form you fill out. */}
            <form>
                <label htmlFor="firstNameField">First name:</label>
                <input type={"text"} id="firstNameField"/>

                <label htmlFor="lastNameField">Last name:</label>
                <input type={"text"} id="lastNameField"/>

                <label htmlFor="emailField">Email:</label>
                <input type={"text"} id="emailField"/>
                
                <label htmlFor="phoneField">Phone #:</label>
                <input type={"text"} id="phoneField"/>
                
                <input type={"checkbox"} id="emailConsent"/>
                <label htmlFor="emailConsent">I consent to receive email updates.</label>

                <input type={"checkbox"} id="phoneConsent"/>
                <label htmlFor="phoneConsent">I consent to receive text updates.</label>
            </form>

            {/* "Continue" button. Add link to next page when that page exists. */}
            <button className="continueBtn" type="submit">Continue</button>
        </>
    );
}

export default Details;