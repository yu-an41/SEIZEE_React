import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'
import dayjs from 'dayjs'
//import useWindowDimensions from '../components/useWindowDimensions'

import CardHome from '../components/Card_home'
import NavBar from '../../components/NavBar'
import '../styles/ForumHome.scss'

function ForumHome() {
  // 偵測目前的看到的視窗高+寬
  // const { height, width } = useWindowDimensions()

  // // 定義內容的區塊高+寬(必定會超過目前的視窗高+寬)，
  // // 注意超出此範圍會有拖曳不到的問題，所以最好要留四周一些空白邊界
  // const contentWidth = 2000
  // const contenctHeight = 2000

  // // 用於定義內容區域的style
  // // 因為是動態計算所以需要在js裡寫
  // const styles = {
  //   width: contentWidth,
  //   height: contenctHeight,
  //   top: -Math.round((contenctHeight - height) / 2),
  //   left: -Math.round((contentWidth - width) / 2),
  //   position: 'absolute',
  //   padding: 50,
  // }

  // // 拖曳邊界
  // const bounds = {
  //   // top: -Math.round((contenctHeight - height) / 2),
  //   top: -Math.round((contenctHeight - height) / 2),
  //   bottom: Math.round((contenctHeight - height) / 2),
  //   left: -Math.round((contentWidth - width) / 2),
  //   right: Math.round((contentWidth - width) / 2),
  // }

  const [homeCadrd, setHomeCard] = useState([
    {
      sid: '',
      member_sid: '',
      categories_sid: '',
      title: '',
      icon: '',
      img: '',
      mb_name: '惜食料理王',
      creat_at: '',
    },
  ])
  const getHomePostData = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/forum/all_post`)
      res.data.sort(() => {
        //隨機產生資料
        return Math.random() - 0.5
      })
      console.log(res.data)
      setHomeCard(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getHomePostData()
  }, [])
  return (
    <>
      <div className="p-navBar">
        <NavBar />
      </div>
      <div className="p-home">
        <Draggable
          axis="both"
          // bounds={bounds}
          // 對應要轉為可拖曳的區塊css classname
          handle=".p-homeCardWrap"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
        >
          {/* style={styles} */}
          <div className="p-homeCardWrap">
            {homeCadrd &&
              homeCadrd.map((v, i) => {
                return <CardHome homeData={v} key={v.sid} />
              })}
          </div>
        </Draggable>
        <div className="p-homeBar">
          <Link to={`/forum/official`} style={{ textDecoration: 'none' }}>
            <h3>SEIZEE版</h3>
          </Link>
          <Link to={`/forum/store`} style={{ textDecoration: 'none' }}>
            <h3>店家版</h3>
          </Link>
          <Link to={`/forum/share`} style={{ textDecoration: 'none' }}>
            <h3>戰士版</h3>
          </Link>
          <Link to={`/forum/cook`} style={{ textDecoration: 'none' }}>
            <h3>剩食料理版</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ForumHome
