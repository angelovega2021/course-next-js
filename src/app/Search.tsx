import React from 'react'
import { SearchProps } from './Courses'



const Search = ({ searchQuery, handleOnchange }:SearchProps) => {
  return (
    <div>
      <input value={searchQuery} className="border border-black p-2" onChange={handleOnchange} />
    </div>
  )
}

export default Search