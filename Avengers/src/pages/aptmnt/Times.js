import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';
import "./Times.css"
import 'react-calendar/dist/Calendar.css'

function Times({updateTime}) {
    // Get data using Fetch API.
    const [dates, setDates] = useState([]);

    const [time, setTime] = useState([]);


    // Temporary fake dates.
    useEffect(() => {
        const fakeDates = [new Date(2022, 9, 21, 9, 0), new Date(2022, 9, 21, 10, 30), new Date(2022, 10, 4, 15, 0)];
        setDates(fakeDates);
    }, []);
    // Change the URL inside fetch() to use the real server when that exists.
    /*
    useEffect(() => {
        fetch("")
        .then((result) => result.json())
        .then((dates) => setDates(dates));
    }, []);
    */

    // Convert the dates to a more useable format.
    const dateTimes = new Map();
    for (let currentDate of dates) {
        if (!dateTimes.has(extractDate(currentDate))) {
            dateTimes.set(extractDate(currentDate), []);
        }
        dateTimes.get(extractDate(currentDate))
            [dateTimes.get(extractDate(currentDate)).length]
             = extractTime(currentDate);
    }
    
    // Function for when the calendar value is changed.
    const [value, setValue] = useState();
    const [datesToUse, setDatesToUse] = useState(dateTimes);
    function onClickDay(nextValue) {
        setValue(nextValue);
        setDatesToUse(new Map().set(extractDate(nextValue), dateTimes.get(extractDate(nextValue))));
        //datesToUse.set(extractDate(nextValue), dateTimes.get(extractDate(nextValue)));
    }
    // Function to show which days on the calendar have available appointment times.
    function tileContent({ date, view }) {
        if (view === 'month') {
            if (dates.find(dDate => (differenceInCalendarDays(dDate, date) === 0))) {
                return <abbr style={{height: "auto", color: "rgb(12, 154, 215)", fontSize: 16}}>&#x2022;</abbr>
            }
        }
    }

    // Create the HTML elements from the dates and times.
    const dateTimesHTML = Array.from(datesToUse.keys()).map((item) => (
        <>
             
            <h2 id = "stime">{item}</h2>
            {datesToUse.get(item) ?
            <ul className="timeBtnGrp">
                
                {Array.from(datesToUse.get(item)).map((innerItem) => (
                    <li>
                        <input type="radio" name="timeBtns" id={"timeBtn".concat(Array.from(datesToUse.keys()).indexOf(item)).concat("-").concat(Array.from(datesToUse.get(item)).indexOf(innerItem))}/>
                        <label htmlFor={"timeBtn".concat(Array.from(datesToUse.keys()).indexOf(item)).concat("-").concat(Array.from(datesToUse.get(item)).indexOf(innerItem))}>{innerItem}</label>
                        
                        
                    </li>
                ))}
            </ul>
            : <p>There are no available appointment times on this date.</p>}
        </>
    ));

    // Return the page.
    return (
        <>
            {/* Hero image. */}
            <div id="hero_img"><h1>Select a Date and Time</h1></div>

            {/* Calendar picker. (Use react-calendar API.) */}
            <div className="calendarPicker">
                <Calendar onClickDay={onClickDay} value={value} tileContent={tileContent}/>
            </div>

            {/* Get dates from server and make them into "h2"s or something. In between,
            have grids of buttons with times that we also get from server. */}
            <form className="dates_times">
                {dateTimesHTML}
            </form>

            {/* "Continue" button. Add link to next page when that page exists. */}
            {/* <Link to="/details"> */}
            <button className="continueBtn" onClick={(e) => {updateTime(e, document.getElementById('stime').textContent)}}>Continue</button>
            {/* </Link> */}
        </>
    );
}

function extractDate(date) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return weekdays[date.getDay()] + ", " + date.getDate() + " of " + months[date.getMonth()];
}

function extractTime(date) {
    let returnTime = (date.getHours() % 12) + ":";
    if (date.getMinutes() < 10) {
        returnTime = returnTime + "0";
    }
    returnTime = returnTime + date.getMinutes();
    if (date.getHours() < 12) {
        returnTime = returnTime + " AM";
    } else {
        returnTime = returnTime + " PM";
    }
    return returnTime;
}

export default Times;