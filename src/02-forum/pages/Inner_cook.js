import React from 'react'

import '../styles/InnerCook.scss'
import '../styles/InnerCook.scss'

import post from './../p-imgs/post.jpeg'
import time from './../p-imgs/pixel-time.svg'
import serving from './../p-imgs/pixel-serving.svg'
import heart from '../p-imgs/pixel-heartNormal.svg'
import cake from '../p-imgs/food/cake.png'

import Step from '../components/Step'
import Tag from '../components/Tag'
import Member from '../components/Member'
import SideBar from '../components/Side_bar'
import WriteBtn from '../components/WriteBtn'
import Comment from '../components/Comment'

function InnerCook() {
  const stepArray = [1, 1]
  return (
    <>
      <div className="innerofficial">
        <div className="sidBar">
          <SideBar />
        </div>
        <div className="p-cookContainer">
          <div className="p-cookTitle">
            <div className="p-cookH1AdIcon">
              <h1>蕃茄菇菇雞肉飯</h1>
              <div className="p-saveIcon" alt="">
                <img src={heart} alt="" />
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
              <img src={post} alt="" />
            </div>
            <p>
              醃魚炸魚就一鍋直接來，紅新娘肉質細膩無腥味，炸起來真的很好吃，只需要用濕粉醃漬，油炸時直接就著醃魚的粉漿下鍋，外酥內嫩啊！！也歡迎到女漢子的臉書專頁逛逛喔～
            </p>
          </div>
          <div className="p-instAdTimAdServ">
            <div className="p-timeAdServ">
              <div className="p-timeWrap">
                <div className="p-timeIcon">
                  <img src={time} alt="" />
                </div>
                <h4 className="p-timeText">
                  時間
                  <span />
                  20分鐘
                </h4>
              </div>
              <div className="p-servingWrap">
                <div className="p-servingIcon">
                  <img src={serving} alt="" />
                </div>
                <h4 className="p-servingText">
                  人份 <span />
                  2人份
                </h4>
              </div>
            </div>
            <div className="p-instAdTitle">
              <h3>食材</h3>
              <ul className="p-instructions">
                <li>
                  <p className="p-content">白米</p>
                  <p className="p-portion">150g</p>
                </li>
                <li>
                  <p className="p-content">白米</p>
                  <p className="p-portion">150g</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-stepWrap">
            {stepArray.map((v, i) => {
              return <Step />
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
            <Comment />
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
    </>
  )
}

export default InnerCook
