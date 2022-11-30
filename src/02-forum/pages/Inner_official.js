import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import '../styles/InnerOfficial.scss'

import post from './../p-imgs/post.jpeg'
import arrowY from './../p-imgs/pixel-arrowY.svg'
import heart from '../p-imgs/pixel-heartNormal.svg'
import cake from '../p-imgs/food/cake.png'

import Tag from '../components/Tag'
import Member from '../components/Member'
import SideBar from '../components/Side_bar'
import WriteBtn from '../components/WriteBtn'
import Comment from '../components/Comment'
import Recommendation from '../components/Recommendation'

function InnerOfficial() {
  const { sid } = useParams()
  return (
    <>
      <div className="innerOfficial">
        <div className="sidBar">
          <SideBar />
        </div>
        <div className="p-officialContainer">
          <div className="p-officialTitle">
            <div className="p-officialH1AdIcon">
              <h1>惜食行善網「讓農夫自己賣」</h1>
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
            <img src={post} alt="" />
          </div>
          <div className="p-abstract">
            <div className="p-arrowAdH3">
              <div className="p-arrowIcon">
                <img src={arrowY} alt="" />
              </div>
              <h3>文章摘要</h3>
            </div>
            <p>
              來自台東的火龍果、嘉義的芒果、南投的菜豆乾...這些都是農友在惜食行善網「農產品公平交易平台」裡上架的商品，利用線上交易形式，讓農民可以創造專屬的網路商場，而在平台上的交易不受大盤控制，也能販賣格外農品，同時，賣家則是能與農友溝通以確保購買的是無毒、有機的蔬果，建立農友與消費者的良好關係並實現公平交易，也為農友創造販賣新路。
            </p>
          </div>
          <div className="p-officialContent">
            <p>
              惜食行善網的創辦人楊東翰，國中時前往加拿大，大學就讀飯店管理專業，在海外求學的過程中，始終對故鄉台灣懷抱回憶與憧憬。楊東翰學成歸來後，在台灣這片故土上發揮所學，曾任職於知名酒店，後來創辦了管理顧問公司，這些經驗也培養了他經營管理的能力及思維。
              楊東翰回台後，一直認為台灣如他記憶中美好，但某天瀏覽到的數據不僅改變了這個印象，也成為了他人生的轉捩點：「全台灣每年浪費三百萬噸的食物，而這些被浪費的食物可以養活三十萬低收入戶長達二十年。」
              因為這則消息，楊東翰發覺曾經被他忽視的社會問題，並嘗試去挖掘問題背後的原因。2016年，楊東翰正式展開實地走訪的旅程，他跟隨許多不同的機構及團體去深入瞭解台灣的社會面貌、進行公益服務，其中他最關注的議題是當初啟發他的農業與糧食，他與各地的農友接觸交流，發現農友在耕種的時候，為確保農產品能賣得出去而不被銷毀或低價售出，總是需要噴灑大量的農藥保持賣相，卻因此對身體造成傷害，於是「為農友做點什麼」的想法在他心底逐漸萌生，2017年年底，楊東翰正式決定創立惜食行善網，並以「食物」作為改善社會的出發點。
              為農友發想 建立專屬網路空間
              「歡迎來到一個『以善意為出發點的世界』。」楊東翰在開始介紹惜食行善網前，笑著講述企業的理念，而這句話也作為網站的標語，出現在網站最顯眼的地方。惜食行善網是由惜食社會企業所經營的網路平台，追求的是幫助弱勢群體，解決農友公平交易之問題，以及傳遞和建立惜食觀念。「我想要規模性、系統性、一次性的去解決這些社會問題。」這是楊東翰當初創辦惜食行善網的願景。他在走訪的過程中，發覺公益團體、機構及組織有時會因為缺乏管理經驗導致資源浪費，因此他決定運用自己的管理能力創辦社會企業，期望能夠將資源最大利用化，將每一份資源放在真正需要的地方。
              惜食行善網內的農產品公平交易平台，是楊東翰專為農友的公平交易而打造，他希望農產品公平交易平台所具備的功能，能讓農友有獨立的商城頁面推廣品牌、能放置商品圖片及文字介紹，以及提供買賣雙方交流的窗口。然而在他提出自己對網站的架構設想後，卻被架設網站的公司告知他想做的是類比大型網路商城的運作模式，報價也因此高達千萬。
            </p>
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

export default InnerOfficial
