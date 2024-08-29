import React from "react";
import './userInputs.css'
import { useState } from "react";
// import { changeName } from './result'

function Input({ title, id, placeholder='youe answer', onChange }) {
  return (
    <div>
      <label htmlFor={id}>{title}</label> <br/>
      <input 
        id={id} 
        placeholder={placeholder}
        onChange={onChange}
      /> 
    </div>
  )
}

  
function Textarea({ title, id, placeholder='your answer', onChange }) {
  return (
    <div>
      <label htmlFor={id}>{title}</label> <br/>
      <textarea 
        id={id} 
        placeholder={placeholder} 
        onChange={onChange}>
      </textarea>
    </div>
  )
}

function GeneralInfo({ general, onChange }) {
  return (
    <div className="inputSection">
      <h1>General Information</h1>
      <div className='inputs'>
        {Object.keys(general).map(key => (
          key === 'summary' ? 
            <Textarea 
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              key={key} 
              id={key} 
              onChange={onChange} 
            /> 
          :
            <Input 
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              key={key} 
              id={key} 
              onChange={onChange} 
            />
        ))}
      </div>
    </div>
  )
}

function Education({ education, onChange }) {
  return (
    <div className="inputSection">
      <h1>Education</h1>
      <div className="inputs">
        {Object.keys(education).map(key => (
          <Input 
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            key={key} 
            id={key} 
            onChange={onChange} 
          />
        ))}
      </div>
    </div>
  )
}

function Experience({ experience, onChange }) {
  return (
    <div className="inputSection">
      <h1>Experience</h1>
      <div className="inputs">
        {Object.keys(experience).map(key => (
          <Input 
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            key={key} 
            id={key} 
            onChange={onChange} 
          />
        ))} 
      </div>
    </div>
  )
}

function UserInput({ general, education, experience, onChange }) {
  return (
    <div className='userInputContainer'>
      <GeneralInfo general={general} onChange={onChange} />
      <Education education={education} onChange={onChange} />
      <Experience experience={experience} onChange={onChange} />
    </div>
  )
}

export default UserInput

