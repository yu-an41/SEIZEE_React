import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

import './../styles/Card.scss'
import Tag from './Tag'
import post from './../p-imgs/post.jpeg'
import cake from './../../dotown/cake.png'
import heartNormal from './../p-imgs/pixel-heartNormal.svg'
import heartClick from './../p-imgs/pixel-heartClick.svg'

import ForumCollectContext from '../../contexts/02-forum-lovePost'
import Member from './Member'

export function Card_cook({ postData, heart }) {
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
  } = postData
  // const {
  //   collection,
  //   setCollection,
  //   collectList,
  //   setCollectList,
  //   collectionNum,
  //   setCollectionNum,
  //   addCollect,
  //   delCollect,
  //   handleClick,
  // } = useContext(ForumCollectContext)
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
            <img
              src={`http://localhost:3004/images/02-forum/cook/${img}`}
              alt=""
            />
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
              <Member cookMb={postData} />
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

export function Card_official({ postData }) {
  const {
    sid,
    img,
    title,
    induction,
    content,
    mb_photo,
    mb_name,
    mb_email,
    creat_at,
    tag,
    tagContent,
    categories_sid,
  } = postData
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }
  // console.log(tag)
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
          <div className="p-card-contenter-wrap">
            <div className="p-card-contenter">
              <h4>{title}</h4>
              <div className="p-tag-wrap">{/* <Tag tagSid={tag} /> */}</div>
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
    mb_photo,
    mb_name,
    shop_phone,
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
              <div className="p-tag-wrap">{/* <Tag /> */}</div>
              <p className="p-contenter-p">{induction}</p>
            </div>

            <div className="p-infor-wrap">
              <div className="p-card-member">
                <div className="p-member-photo">
                  <img src={cake} alt="" />
                </div>
                <div className="p-memberId">
                  <p>{mb_name}</p>
                  <p>{shop_phone}</p>
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
  const {
    sid,
    img,
    title,
    induction,
    content,
    mb_photo,
    mb_name,
    mb_email,
    creat_at,
    categories_sid,
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
            <img src={`http://localhost:3004/images/07-all/${img}`} alt="" />
          </div>
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
                <Member cookMb={postData} />
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
