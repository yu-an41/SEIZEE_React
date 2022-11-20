import React from 'react'

import './../styles/Card.scss'
import Tag from './Tag'
import post from './../p-imgs/post.jpeg'
import cake from './../../dotown/cake.png'
import heartNormal from './../p-imgs/pixel-heartNormal.svg'

function Card_post() {
  return (
    <>
      <div className="p-card-p">
        <div className="p-img-wrap">
          <img src={post} alt="" />
        </div>
        <div className="p-card-contenter-wrap">
          <div className="p-card-contenter">
            <h4>惜食行善網「讓農夫自己賣」</h4>
            <div className="p-tag-wrap">
              <Tag />
            </div>
            <p className="p-contenter-p">
              2018年11月，惜食行善網正式上線。其中的農產品公平交易平台是楊東翰續食理念的具體表現，平台有著完整的交易體系，運作方式類同一般的網路商城...
            </p>
          </div>
          <div className="p-infor-wrap">
            <div className="p-card-member">
              <div className="p-member-photo">
                <img src={cake} alt="" />
              </div>
              <div className="p-memberId">
                <p>惜食料理王</p>
                <p>@love_cooking</p>
              </div>
            </div>
            <div className="p-day-wrap">
              <p className="p-day">2022.10.10</p>
              <div className="p-like-wrap">
                <img src={heartNormal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card_post
