import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import './../styles/Card.scss'
import Tag from './Tag'
import post from './../p-imgs/post.jpeg'
import cake from './../../dotown/cake.png'
import heartNormal from './../p-imgs/pixel-heartNormal.svg'
import dayjs from 'dayjs'

export function Card_cook({ postData }) {
  const { sid, img, title, induction, content, creat_at, categories_sid } =
    postData
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }

  return (
    <>
      <div className="p-card-p" key={sid}>
        <Link
          to={`${cateMap[categories_sid] + sid}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="p-img-wrap">
            <img
              src={`http://localhost:3004/images/02-forum/cook/${img}`}
              alt=""
            />
          </div>
          <div className="p-card-contenter-wrap">
            <div className="p-card-contenter">
              <h4>{title}</h4>
              <div className="p-tag-wrap">
                <Tag />
              </div>
              <p className="p-contenter-p">{induction}</p>
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
                <p className="p-day">{dayjs(creat_at).format('YYYY.MM.DD')}</p>
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

export function Card_official({ postData }) {
  const { sid, img, title, induction, content, creat_at, categories_sid } =
    postData
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }

  return (
    <>
      <div className="p-card-p" key={sid}>
        <Link
          to={`${cateMap[categories_sid] + sid}`}
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
              <p className="p-contenter-p">{induction}</p>
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
                <p className="p-day">{dayjs(creat_at).format('YYYY.MM.DD')}</p>
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
export function Card_store({ postData }) {
  const {
    sid,
    img,
    title,
    induction,
    content,
    creat_at,
    categories_sid,
    shop_cover,
  } = postData
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }

  return (
    <>
      <div className="p-card-p" key={sid}>
        <Link
          to={`${cateMap[categories_sid] + sid}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="p-img-wrap">
            <img src={`http://localhost:3004/images/03-shop/${img}`} alt="" />
          </div>
          <div className="p-card-contenter-wrap">
            <div className="p-card-contenter">
              <h4>{title}</h4>
              <div className="p-tag-wrap">
                <Tag />
              </div>
              <p className="p-contenter-p">{induction}</p>
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
                <p className="p-day">{dayjs(creat_at).format('YYYY.MM.DD')}</p>
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

export function Card_share({ postData }) {
  const { sid, img, title, induction, content, creat_at, categories_sid } =
    postData
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }

  return (
    <>
      <div className="p-card-p" key={sid}>
        <Link
          to={`${cateMap[categories_sid] + sid}`}
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
              <p className="p-contenter-p">{induction}</p>
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
                <p className="p-day">{dayjs(creat_at).format('YYYY.MM.DD')}</p>
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
