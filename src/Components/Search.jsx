import React, { useState} from 'react'
import { FaSearch } from "react-icons/fa";
import "./Search.css"
import Result from './Result';

const Search = () => {
  const [search, setSearch] = useState("")
  const [content, setContent] = useState([])

    const Submit = (e) => {
    e.preventDefault()
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    .then(res => res.json())
    .then(data => setContent(data))

    }

  return (
    <div className='Search'>
    <form onSubmit={Submit}>
      <input 
      type="text" 
      value = {search}
      placeholder='Enter Word'
      onChange = {(e) => setSearch(e.target.value)} 
      />

      <FaSearch onClick={Submit} className='SearchIcon'/>
    </form>

    {Array.isArray(content) ? (content.map((value, index) => <Result key={index} value={value}/>)) 
    : (<h2 className='errorMessage'><span style={{fontSize: "4em"}}>😕</span> 
    <br />
    Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again later.</h2>)}
    </div>
    )
}

export default Search
