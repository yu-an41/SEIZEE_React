import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import '../styles/InnerCook.scss'

import postImg from './../p-imgs/post.jpeg'
import timeIcon from './../p-imgs/pixel-time.svg'
import servingIcon from './../p-imgs/pixel-serving.svg'
import heartIcon from '../p-imgs/pixel-heartNormal.svg'
import cake from '../p-imgs/food/cake.png'

import Step from '../components/Step'
import Tag from '../components/Tag'
import Member from '../components/Member'
import SideBar from '../components/Side_bar'
import WriteBtn from '../components/WriteBtn'
// import Comment from '../components/Comment'
// import log from 'eslint-plugin-react/lib/util/log'

function InnerCook() {
  const stepArray = [1, 1]
  const { sid } = useParams()
  const [cookInnerData, setCookInnerData] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 4,
      title: '',
      img: '',
      video: '',
      content: '',
      serving: '',
      times: '',
      likes: 1,
      creat_at: '',
      instructions: [
        {
          sid: '',
          instrucContent: '',
          portion: '',
        },
      ],
    },
  ])

  const getCookInnerData = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/forum/cook/${sid}`)
      console.log(res.data.cookInnerRows)
      setCookInnerData(res.data.cookInnerRows)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getCookInnerData()
  }, [])

  return (
    <>
      {cookInnerData.map((e, i) => {
        const { title, img, content, serving, times, instructions, sid } = e
        return (
          <div className="innerCook" key={sid}>
            <div className="sidBar">
              <SideBar />
            </div>
            <div className="p-cookContainer">
              <div className="p-cookTitle">
                <div className="p-cookH1AdIcon">
                  <h1>{title}</h1>
                  <div className="p-saveIcon" alt="">
                    <img src={heartIcon} alt="" />
                  </div>
                </div>

                <div className="p-cookTagWrap">
                  <Tag />
                </div>
                <div className="p-cookMemberWrap">
                  <Member />
                </div>
              </div>

              <div className="p-imgAdContet">
                <div className="p-innerImgWrap">
                  <img src={img} alt="" />
                </div>
                <p>{content}</p>
              </div>
              <div className="p-instAdTimAdServ">
                <div className="p-timeAdServ">
                  <div className="p-timeWrap">
                    <div className="p-timeIcon">
                      <img src={timeIcon} alt="" />
                    </div>
                    <h4 className="p-timeText">
                      時間
                      <span />
                      {times}
                    </h4>
                  </div>
                  <div className="p-servingWrap">
                    <div className="p-servingIcon">
                      <img src={servingIcon} alt="" />
                    </div>
                    <h4 className="p-servingText">
                      人份 <span />
                      {serving}
                    </h4>
                  </div>
                </div>
                <div className="p-instAdTitle">
                  <h3>食材</h3>

                  <ul className="p-instructions">
                    {instructions.map((v, i) => {
                      console.log(v.instrucContent)
                      return (
                        <li key={i}>
                          <p className="p-instContent">{v.instrucContent}</p>
                          <p className="p-portion">{v.portion}</p>
                        </li>
                      )
                    })}

                    <li>
                      <p className="p-instContent">白米</p>
                      <p className="p-portion">150g</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-stepWrap">
                {stepArray.map((v, i) => {
                  return (
                    <div key={i}>
                      <Step />
                    </div>
                  )
                })}
              </div>
              <div className="p-PS">
                <h2>補充</h2>
                <h4>
                  食材稍微炒過後，香氣滋味會更好。
                  米跟水的比例為1:1，如果喜歡米粒較有口感，可以將水量改成0.9。
                  飯後配合1個拳頭的水果營養更均衡，其他餐要記得攝取奶類喔!
                </h4>
              </div>
              <div className="p-commentWrap">
                <div className="p-commentTitle">
                  <h3>留言</h3>
                </div>
                <div className="p-commInput">
                  留言表格
                  <div className="p-commInputImg">
                    <img src={cake} alt="" />
                  </div>
                </div>
                {/* <Comment /> */}
              </div>
            </div>
            <div className="p-checkAdWrit">
              <div className="p-checkStep">
                <h3>STEP1</h3>
              </div>
              <div className="p-writWrap">
                <WriteBtn />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default InnerCook
