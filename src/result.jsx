import React from "react";
import './result.css'
import { useState } from "react";

// function name() {
// }


function GeneralInfo({ general }) {
    const keys = Object.keys(general)
    const keysToDisplay = keys.slice(1, -1)

    return (
        <div className="section general">
            <div className="name">
                <h1>{general.name}</h1>
            </div>
            <div className="contact">
                {keysToDisplay.map(key => (
                    <p key={key}>{general[key]}</p>
                ))}
            </div>
            <div className="summary">
                <p>{general.summary}</p>
            </div>
        </div>
    )
}

function Education({ education }) {
    return (
        <div className="section">
            <h1>Education</h1>

            {Object.keys(education).map(key => (
                <p>{education[key]}</p>
            ))}
        </div>
    )
}

function Experience({ experience }) {
    return (
        <div className="section">
            <h1>Experience</h1>

            {Object.keys(experience).map(key => (
                <p>{experience[key]}</p>
            ))}
        </div>
    )
}

function Result({ general, education, experience }) {

    return (
        <div className="resultContainer">
            <div className="canvas">
                <GeneralInfo general={general} />
                <Education education={education} />
                <Experience experience={experience} />
            </div>
        </div>
    )
}

export default Result