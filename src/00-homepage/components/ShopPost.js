import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import './../styles/ShopPost.scss'
// import ShopPic from './../../dotown/toast.png'

function shopPost({ shopInfo }) {
  const { sid, categories_sid, member_sid, title, img, induction, mb_name } =
    shopInfo
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }
  return (
    <div className="y-shop-card-container">
      <Link
        to={`${cateMap[categories_sid] + sid}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="y-shop-top">
          <div className="y-shop-author">
            <p className="y-shop-author-name">{mb_name}</p>
            <p className="y-shop-author-account">{`@member_${sid}`}</p>
          </div>
          <div className="y-shop-title">
            <p>{title}</p>
          </div>
        </div>
        <div className="y-shop-text">
          <p>{induction}</p>
        </div>
        <div className="y-shop-pic">
          <img src={img} alt="shop banner" />
        </div>
      </Link>
    </div>
  )
}

export default shopPost
