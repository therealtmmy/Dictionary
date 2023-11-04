import React from 'react'
import "./Result.css"
import {FaExternalLinkAlt} from "react-icons/fa";

const Result = ({value}) => {
  return (
    <div className='Result'>
        <h2>{value.word}</h2>
        <p className='translation'>
          {value.phonetic}
        </p>

        <p className='partSpeech'>
          {value.meanings[0].partOfSpeech}
        </p>
        
        <div className='line'></div>
        <p>Meaning</p>
        <ul>
          <li>{value.meanings[0].definitions[0].definition}</li>
          <li>{value.meanings[0].definitions[1].definition}</li>
          <li>{value.meanings[0].definitions[2].definition}</li>
        </ul>
      
          <p>Synonyms:
             <span className='Synonyms'>  
              {value.meanings[0].definitions[0].synonyms}
            </span>
          </p>

          <p>Antonyms:  
            <span className='Antonyms'>  
             {value.meanings[0].definitions[0].antonyms}
            </span>
          </p>
          
          {/* <p className='partSpeech'>
            {value.meanings[1].partOfSpeech}
            </p>
          <div className='line'></div>

          <p>Meaning</p>
          <ul>
              <li>{value.meanings[1].definitions[0].definition}</li>
              <li>{value.meanings[1].definitions[1].definition}</li>
          </ul>

          <p className='sourceCode'>
          Source: 
          <a 
          href={value.sourceUrls}> 
           {value.sourceUrls} </a> 
          <FaExternalLinkAlt/>
          </p> */}
    </div>
  )
}

export default Result
