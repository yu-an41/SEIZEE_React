import React from 'react'
import './RecommendCard.scss'

function RecommendCard() {
  return (
    <>
      <div className="a-productRecommend">
        <div class="a-recommendText">
          <img src="svg/nut.svg" alt="" />
          <h3>惜食商品推薦</h3>
        </div>
        <div className="a-recommendWrapper">
          <img src="img/10012.jpg" alt="" />
          <img src="img/10009.jpg" alt="" />
          <img src="img/10010.jpg" alt="" />
          <img src="img/10011.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default RecommendCard
