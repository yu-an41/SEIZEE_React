import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import './../styles/Card.scss'
import Tag from './Tag'
import post from './../p-imgs/post.jpeg'
import cake from './../../dotown/cake.png'
import heartNormal from './../p-imgs/pixel-heartNormal.svg'

function Card_post({ postData }) {
  const { sid, img, title, content, creat_at } = postData

  return (
    <>
      <div className="p-card-p" key={sid}>
        <Link
          to={`/forum/cook/inner/${postData.sid}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="p-img-wrap">
            <img src={img} alt="" />
          </div>
          <div className="p-card-contenter-wrap">
            <div className="p-card-contenter">
              <h4>{title}</h4>
              <div className="p-tag-wrap">
                <Tag />
              </div>
              <p className="p-contenter-p">{content}</p>
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
                <p className="p-day">{creat_at}</p>
                <div className="p-like-wrap">
                  <img src={heartNormal} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Card_post
