import React from 'react'
import cake from './../p-imgs/food/cake.png'
import '../styles/Member.scss'

function Member({ cookMb }) {
  return (
    <>
      <div className="p-card-member">
        <div className="p-member-photo">
          <img src={cake} alt="" />
        </div>
        <div className="p-memberId">
          <p>{cookMb?.mb_name}</p>
          <p>{cookMb?.mb_email}</p>
        </div>
      </div>
    </>
  )
}

export default Member
