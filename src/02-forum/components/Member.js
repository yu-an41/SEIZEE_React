import React from 'react'
import cake from './../p-imgs/food/cake.png'
import '../styles/Member.scss'

function Member() {
  return (
    <>
      <div className="p-card-member">
        <div className="p-member-photo">
          <img src={cake} alt="" />
        </div>
        <div className="p-memberId">
          <p>惜食料理王</p>
          <p>@love_cooking</p>
        </div>
      </div>
    </>
  )
}

export default Member
