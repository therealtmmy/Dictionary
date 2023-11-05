import React from 'react'
import "./Result.css"
import {FaExternalLinkAlt} from "react-icons/fa";

const Result = ({value}) => {
  
  return (
  <div className='Result'>
        <h2>{value.word}</h2>
        <p className='translation'> {value.phonetic}</p>
        <p className='partSpeech'> {value.meanings[0].partOfSpeech}</p>
        
  <div className='line'></div>
        <p>Meaning</p>
          <ul>
              <li>{value.meanings[0].definitions[0].definition}</li>
              {value.meanings[0] && value.meanings[0].definitions[1] && value.meanings[0].definitions[1].definition ? (<li>{value.meanings[0].definitions[1].definition}</li>) : null}
              {value.meanings[0] && value.meanings[0].definitions[2] && value.meanings[0].definitions[2].definition ? (<li>{value.meanings[0].definitions[2].definition}</li>) : null}
          </ul>

          {/* Synonyms Session */}
      
          {value.meanings[0].definitions[0].synonyms.join(", ") && (<p>Synonyms: <span className='Synonyms'> {value.meanings[0].definitions[0].synonyms.join(", ")}</span></p>)}
          {value.meanings[0].definitions[0].antonyms.join(", ") && (<p>Antonyms:  <span className='Antonyms'> {value.meanings[0].definitions[0].antonyms.join(", ")}</span></p>)}
          {value.meanings[1] && value.meanings[1].partOfSpeech ? (<p className='partSpeech'> {value.meanings[1].partOfSpeech} </p>) : null}

  <div className='line'></div>
          <p>Meaning</p>
            <ul>
                {value.meanings[1] && value.meanings[1].definitions[0].definition ? (<li>{value.meanings[1].definitions[0].definition}</li>) : (null)}
                {value.meanings[1] && value.meanings[1].definitions[1] && value.meanings[1].definitions[1].definition ? (<li>{value.meanings[1].definitions[1].definition}</li>) : null}
                {value.meanings[1] && value.meanings[1].definitions[2] && value.meanings[1].definitions[2].definition ? (<li>{value.meanings[1].definitions[2].definition}</li>) : null}
            </ul> 
          <p className='sourceCode'>Source: <a href={value.sourceUrls}>Wiktionary</a> <FaExternalLinkAlt/> </p>
  </div>
  )
}

export default Result
