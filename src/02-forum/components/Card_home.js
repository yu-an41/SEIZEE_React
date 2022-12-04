import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import './../styles/Card.scss'
import strawberry from './../../dotown/strawberry.png'
import pixel_arrowB from './../p-imgs/pixel-arrowB.svg'

function Card_home({ homeData }) {
  const iconUrl = 'http://localhost:3004'
  const {
    sid,
    img,
    icon,
    title,
    induction,
    content,
    creat_at,
    categories_sid,
  } = homeData
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }
  console.log(icon)

  return (
    <>
      <div className="p-crad-h" key={sid}>
        <div className="p-card-title">
          <Link
            to={`${cateMap[categories_sid] + sid}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="p-img-div">
              <img
                src={`http://localhost:3004/images/02-forum/foods/${icon}`}
                alt=""
              />
              {/* `${iconUrl}/images/02-forum/foods/${icon}` */}
            </div>
          </Link>
          <h3>{title}</h3>
        </div>

        <div className="p-card-play">
          <div className="p-card-member">
            <p>惜食料理王</p>
            <p>{dayjs(creat_at).format('YYYY.MM.DD')}</p>
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
