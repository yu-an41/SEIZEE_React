import React from 'react'

import './../styles/Recommendation.scss'
import like from './../p-imgs/like.png'

function Recommendation() {
  return (
    <>
      <div className="p-recomWrap">
        <div className="p-recomTitle">
          <div className="p-likeWrap">
            <img src={like} />
          </div>
          <h5>推薦文章</h5>
        </div>
        <div className="p-recomContent">
          <h5>1</h5>
          <div className="p-recomText">
            <h3>惜食行善網「讓農夫自己賣」</h3>
            <div className="p-recomMember">
              <p className="p-memberName">惜食料理王</p>
              <p>2022.10.10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recommendation
