import React from "react";
import "./Details.css"
 
function Details({updateUser}) {
    const details = {
        fname:"",
        lname:"",
        email:"",
        phone:"",
      };  
    
    const updateDetails=(e)=>{
        details.fname = document.getElementsByName("firstName")[0].value
        details.lname = document.getElementsByName("lastName")[0].value
        details.email = document.getElementsByName("email")[0].value
        details.phone = document.getElementsByName("phoneNum")[0].value
        //console.log(details)
        updateUser(e, details.fname, details.lname, details.email, details.phone)

        //console.log(valueRef.current.value);
        //details.fname = 

    }

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
                    <input type={"text"} id="lastNameField" name="lastName"/>
                </div>
                <div className="detailsCell">
                    <label htmlFor="emailField" className="inputLabel">Email:</label>
                    <input type={"text"} id="emailField" name="email"/>
                </div>
                <div className="detailsCell">
                    <label htmlFor="phoneField" className="inputLabel">Phone #:</label>
                    <input type={"text"} id="phoneField" name="phoneNum"/>
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
            <button className="bookAptmntBtn" type="submit" onClick={(e) => updateDetails()}>Book Appointment</button>
        </>
    );
}

 
//onClick={(e) => {updateUser(e, )}}

export default Details;