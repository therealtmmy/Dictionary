import React from 'react'
import "./Result.css"
import {FaExternalLinkAlt} from "react-icons/fa";

const Result = () => {
  return (
    <div className='Result'>
      <h2>Keyboard</h2>
      <p className='translation'>/Ki:bc:d/</p>

      <p className='partSpeech'>noun</p>
      <div className='line'></div>
      <p>Meaning</p>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      
    <p>Synonyms:<span className='Synonyms'>   electronic keyboard</span> </p>
    <p>Antonyms:<span className='Antonyms'>   electronic keyboard</span> </p>
    
    <p className='partSpeech'>verb</p>
    <div className='line'></div>

    <p>Meaning</p>
    <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>orem ipsum dolor sit amet consectetur.</li>
    </ul>

    <p className='sourceCode'>Source: <a href="">Https </a> <FaExternalLinkAlt/></p>
    </div>
  )
}

export default Result
