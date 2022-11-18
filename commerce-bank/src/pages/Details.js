import React from "react";
import "./Details.css"

import {selectedLocation} from './Locations' //Receive selected location from locations page
import {createUser, getAllUsers} from '../services/AppointmentService'

let user = {};


function Details() {
    return (
        <>
            {/* Hero image. */}
            <h1 id="hero_img">Just A Few More Details</h1>

            {/* The form you fill out. */}
            <form id="detailsForm">
                <div className="detailsCell">
                    <label htmlFor="firstNameField" className="inputLabel">First name:</label>
                    <input type={"text"} id="firstNameField" name="firstName"/>
                </div>
                <div className="detailsCell">
                    <label htmlFor="lastNameField" className="inputLabel">Last name:</label>
                    <input type={"text"} id="lastNameField"/>
                </div>
                <div className="detailsCell">
                    <label htmlFor="emailField" className="inputLabel">Email:</label>
                    <input type={"text"} id="emailField"/>
                </div>
                <div className="detailsCell">
                    <label htmlFor="phoneField" className="inputLabel">Phone #:</label>
                    <input type={"text"} id="phoneField"/>
                </div>
                <div className="checkboxCell">
                    <input type={"checkbox"} id="emailConsent"/>
                    <label htmlFor="emailConsent" className="checkboxLabel">I consent to receive email updates.</label>
                </div>
                <div className="checkboxCell">
                    <input type={"checkbox"} id="phoneConsent"/>
                    <label htmlFor="phoneConsent" className="checkboxLabel">I consent to receive text updates.</label>
                </div>
            </form>
            {/* "Continue" button. Add link to next page when that page exists. */}
            <button className="bookAptmntBtn" type="submit" onClick={(e) => stubbingValues()}>Book Appointment</button>
        </>
    );
}

const testFunction = (e) => {
    getAllUsers()
      .then(response => {
        console.log(response);
    });
}

const testPostFunction = (e) => {
    createUser(user)
      .then(response => {
        console.log(response);
    });
}

const stubbingValues = (e) => {
    user.firstName = document.getElementsByName('firstName').textContent
    user.lastName = document.getElementById("lastNameField").textContent
    user.location = selectedLocation
    console.log(user)
    testPostFunction()
}

export default Details;