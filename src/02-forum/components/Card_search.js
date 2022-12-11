import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

import './../styles/Card.scss'
//component
import Member from './Member'
//svg
import heartNormal from './../p-imgs/pixel-heartNormal.svg'
import heartClick from './../p-imgs/pixel-heartClick.svg'

export default function Card_search({ searchData, heart }) {
  const [solid, setSolid] = useState(false)
  const {
    sid,
    img,
    title,
    induction,
    content,
    creat_at,
    tag,
    categories_sid,
    mb_photo,
    mb_name,
    mb_email,
  } = searchData
  console.log(img)
  const t = categories_sid + '_' + sid
  // console.log({ solid, t, heart })

  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }
  const changeLike = async () => {
    const mbSid = JSON.parse(localStorage.getItem('auth')).mb_sid
    const res2 = await axios.get(
      `http://localhost:3004/forum/forum_toggle?mid=${mbSid}&cid=${categories_sid}&pid=${sid}`
    )
    if (res2.data.success) {
      if (res2.data.msg === 'insert') {
        setSolid(true)
      } else {
        setSolid(false)
      }
    }
  }
  useEffect(() => {
    setSolid(heart)
  }, [heart])
  return (
    <>
      <div className="p-card-p" key={sid}>
        <Link
          to={`${cateMap[categories_sid] + sid}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="p-img-wrap">
            <img src={`http://localhost:3004/images/07-all/${img}`} alt="" />
          </div>
        </Link>
        <div className="p-card-contenter-wrap">
          <div className="p-card-contenter">
            <h4>{title}</h4>
            <div className="p-tag-wrap">{/* <Tag /> */}</div>
            <p className="p-contenter-p">{induction}</p>
          </div>

          <div className="p-infor-wrap">
            <div className="p-card-member">
              {/* <div className="p-member-photo">
                  <img src={cake} alt="" />
                </div>
                <div className="p-memberId">
                  <p>{mb_name}</p>
                  <p>{mb_email}</p>
                </div> */}
              <Member cookMb={searchData} />
            </div>
            <div className="p-day-wrap">
              <p className="p-day">{dayjs(creat_at).format('YYYY.MM.DD')}</p>

              <div className="p-like-wrap">
                {solid ? (
                  <img
                    src={heartClick}
                    alt=""
                    onClick={() => {
                      changeLike()
                    }}
                  />
                ) : (
                  <img
                    src={heartNormal}
                    alt=""
                    onClick={() => {
                      changeLike()
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
