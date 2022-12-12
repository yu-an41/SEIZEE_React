import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//import log from 'eslint-plugin-react/lib/util/log'
import React, { useState } from 'react'

import search from './../p-imgs/pixel-search-line.svg'
import './../styles/Search.scss'

function SearchBar() {
  const [inputSearch, setInputSearch] = useState('')
  const navigate = useNavigate()
  // const usp = new URLSearchParams()
  const srhText = async () => {
    console.log('srhText')
    const url = `/forum/searchPost?searchData=${inputSearch}`
    navigate(url)
  }
  return (
    <>
      <div className="p-searchBar">
        <form action="/recipes/search">
          <input
            type="search"
            value={inputSearch}
            placeholder="搜尋食譜、文章"
            className="p-inputText"
            onChange={(e) => {
              setInputSearch(e.target.value)
              //console.log(e.target.value)
            }}
          />
          <button type="button" onClick={srhText} className="p-search-imgWrap">
            <img src={search} alt="" />
          </button>
        </form>
      </div>
    </>
  )
}

export default SearchBar
