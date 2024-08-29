import { useState } from 'react'
import './App.css'
import UserInput from './userInputs'
import Result from './result'



function App() {
  const [info, setInfo] = useState({
    general: {
      name: 'B. J. Habibie',
      email: 'habibie@indonesia.com',
      phone: '081234567890',
      linkedIn: '@ibnuzakial',
      summary: 'An Indonesian engineer and politician who served as the third President of Indonesia. Known for his work in aeronautics and engineering.'
    },
    education: {
      schoolName: 'RWTH Aachen University',
      titleOfStudy: 'Aerospace Engineering',
      yearOfStudy: '1955-1960'
    },
    experience: {
      companyName: 'Indonesian Aerospace',
      position: 'Chief Engineer',
      responsibility: 'Led the development of the first Indonesian aircraft, N-250.',
      periode: '1976-1998'
    }
  });
  

  function handleChange(event) {
    const {id, value} = event.target

    let section = ''
    if (Object.keys(info.general).includes(id)) {
      section = 'general'
    } else if (Object.keys(info.education).includes(id)) {
      section = 'education'
    // } else if (Object.keys(info.experience).includes(id)) {
      section = 'experience'
    }

    setInfo({...info, [section]: {...info[section], [id] : value}})
    console.log(info[section])
  }



  return (
    <div className='mainContainer'>
      <UserInput 
        general={info.general}
        education={info.education}
        experience={info.experience}
        onChange={handleChange}
      />  
      <Result
        general = {info.general}
        education = {info.education}
        experience = {info.experience}
      />    
    </div>
  )
}

export default App
