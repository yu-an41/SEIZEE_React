import React from 'react'

import search from './../p-imgs/pixel-search-line.svg'
import './../styles/Search.scss'

function searchBar() {
  return (
    <>
      <div className="p-searchBar">
        <div className="p-search-imgWrap">
          <img src={search} alt="" />
        </div>
        
      </div>
    </>
  )
}

export default searchBar
