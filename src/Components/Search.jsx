import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import "./Search.css"
import Result from './Result';
import wordContent from "../Components/SearchData.json"

const Search = () => {
  const [search, setSearch] = useState("")
  const [content, setContent] = useState(wordContent)

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    .then(res => res.json())
    .then(data => {setContent(prevState => {
      return [data]
    })})
  }, [])

  return (
    <div className='Search'>
    <form action="">
      <input 
      type="text" 
      value = {search}
      placeholder='Enter Word'
      onChange = {(e) => setSearch(e.target.value)} 
      />
      <FaSearch className='SearchIcon'/>
    </form>
    {content.map((value, index) => <Result key={index} value={value}/>)}
    </div>
  )
}

export default Search
