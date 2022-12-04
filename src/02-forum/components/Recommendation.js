import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import './../styles/Recommendation.scss'
import like from './../p-imgs/like.png'

function Recommendation() {
  const [recom, setRecom] = useState([
    {
      sid: '',
      member_sid: '',
      categories_sid: '',
      title: '',
      creat_at: '',
    },
  ])
  const getRecomPostData = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/forum/all_post`)
      res.data.sort(() => {
        return Math.random() - 0.5
      })
      console.log(res.data)
      setRecom(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getRecomPostData()
  }, [])

  // const min = Math.min(postNums, recom.length)
  // console.log(min);
  const cateMap = {
    1: '/forum/official/inner/',
    2: '/forum/store/inner/',
    3: '/forum/share/inner/',
    4: '/forum/cook/inner/',
  }
  return (
    <>
      <div className="p-recomWrap">
        <div className="p-recomTitle">
          <div className="p-likeWrap">
            <img src={like} alt="" />
          </div>
          <h5>推薦文章</h5>
        </div>
        {recom.slice(0, 5).map((v, i) => {
          return (
            <div key={i} className="p-recomContent">
              <h5>{i + 1}</h5>
              <div className="p-recomText">
                <Link
                  to={`${cateMap[v.categories_sid] + v.sid}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h3>{v.title}</h3>
                </Link>
                <div className="p-recomMember">
                  <p className="p-memberName">惜食料理王</p>
                  <p>{dayjs(v.creat_at).format('YYYY-MM-DD')}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Recommendation
