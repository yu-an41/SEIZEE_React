import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import '../styles/InnerOfficial.scss'

import heart from '../p-imgs/pixel-heartNormal.svg'

import Tag from '../components/Tag'
import Member from '../components/Member'
import SideBar from '../components/Side_bar'
import WriteBtn from '../components/WriteBtn'
import Comment from '../components/Comment'
import Recommendation from '../components/Recommendation'
import Message from '../components/Ｍessage'

function InnerShare() {
  const { sid } = useParams()
  const [doRerender, setDoRerender] = useState(false)
  const [shareInnerData, setShareInnerData] = useState({
    sid: 1,
    categories_sid: 1,
    title: '',
    img: '',
    video: '',
    induction: '',
    content: '',
    hashtag: '',
    created_at: '',
    comment: [
      {
        sid: '',
        member_sid: '',
        categories_sid: '',
        post_sid: '',
        content: '',
        parent_sid: '',
        created_at: '',
      },
    ],
  })
  const getShareData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3002/forum/share/inner/${sid}`
      )
      console.log(res.data)
      setShareInnerData(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getShareData()
  }, [doRerender])

  return (
    <>
      <div className="innerOfficial">
        <div className="sidBar">
          <SideBar />
        </div>
        <div className="p-officialContainer">
          <div className="p-officialTitle">
            <div className="p-officialH1AdIcon">
              <h1>{shareInnerData.title}</h1>
              <div className="p-saveIcon" alt="">
                <img src={heart} alt="" />
              </div>
            </div>

            <div className="p-officialTagWrap">
              <Tag />
            </div>
            <div className="p-officialMemberWrap">
              <Member />
            </div>
          </div>

          <div className="p-officialImg">
            <img src={shareInnerData.img} alt="" />
          </div>
          <div className="p-officialContent">
            <p>{shareInnerData.induction}</p>
          </div>
          <div className="p-commentWrap">
            <div className="p-commentTitle">
              <h3>留言</h3>
            </div>
            <div className="p-commentForm">
              <Message setDoRerender={setDoRerender} doRerender={doRerender} />
            </div>
            <div className="p-commMessage">
              {shareInnerData.comment &&
                shareInnerData.comment.map((v) => {
                  return (
                    <>
                      <Comment commData={v} key={v.sid} />
                    </>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="p-recomAdWrit">
          <div className="p-RecommendationWrap">
            <Recommendation />
          </div>
          <div className="p-writWrap">
            <WriteBtn />
          </div>
        </div>
      </div>
    </>
  )
}

export default InnerShare
