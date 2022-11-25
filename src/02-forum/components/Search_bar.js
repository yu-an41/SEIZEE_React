import React, { useState } from 'react'

import search from './../p-imgs/pixel-search-line.svg'
import './../styles/Search.scss'

function SearchBar() {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <>
      <div className="p-searchBar">
        <form action="/recipes/search">
          <input
            type="text"
            value={inputSearch}
            placeholder="搜尋食譜"
            className="p-inputText"
            onChange={(e) => {
              setInputSearch(e.target.value)
            }}
          />
          <button type="submit" className="p-search-imgWrap">
            <img src={search} alt="" />
          </button>
        </form>
      </div>
    </>
  )
}

export default SearchBar
