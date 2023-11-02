import React from 'react'
import { FaSearch } from "react-icons/fa";
import "./Search.css"

const Search = () => {
  return (
    <div className='Search'>
    <form action="">
      <input 
      type="text" 
      value = ""
      onChange = "" 
      />
      <FaSearch className='SearchIcon'/>
    </form>
    </div>
  )
}

export default Search
