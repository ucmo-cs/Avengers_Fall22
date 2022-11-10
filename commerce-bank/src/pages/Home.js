import React from "react";
import './Home.css';

function Home() {
    return (
        <>
            {/* Hero image. */}
            <h1 id="hero_img">Welcome to Commerce Bank</h1>

            <p>Click the button to schedule your appointment.</p>

            <button id="startBtn" type="button">Start</button>
        </>
    );
}

export default Home;