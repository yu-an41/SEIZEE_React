import React from 'react'

import './../styles/Card.scss'
import strawberry from './../../dotown/strawberry.png'
import pixel_arrowB from "./../p-imgs/pixel-arrowB.svg"

function Card_home() {
  return (
    <>
      <div className="p-crad-h">
        <div className="p-card-title">
          <div className="p-img-div">
            <img src={strawberry} alt="" />
          </div>
          <h3>惜食行善網「讓農夫自己賣」</h3>
        </div>

        <div className="p-card-play">
          <div className="p-card-member">
            <p>惜食料理王</p>
            <p>2022.10.10</p>
          </div>
          <div className="p-icon-arrow">
            <img src={pixel_arrowB} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card_home
