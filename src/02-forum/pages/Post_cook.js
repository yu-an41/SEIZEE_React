/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './../styles/PostCook.scss'

import SideBar from '../components/Side_bar'
import { Card_cook } from '../components/Card_post'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import WriteBtn from '../components/WriteBtn'
import TabCook from '../components/TabCook'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function PostCook() {
  const [postNums, setPostNums] = useState(10)
  const [likeInstructions, setLikeInstructions] = useState([''])
  const [spendServing, setSpendServing] = useState([''])
  const [spendTime, setSpendTime] = useState([''])
  const [cookPostData, setCookPostData] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 4,
      title: '',
      img: '',
      induction: '',
      serving: '',
      times: '',
      likes: 1,
      creat_at: '',
      mb_photo: '',
      mb_name: '惜食料理王',
      mb_email: 'test1@abc.com',
    },
  ])
  const [pLikes, setPLikes] = useState({})
  const getCookPostData = async () => {
    const usp = new URLSearchParams()
    likeInstructions.forEach((v) => {
      if (v) usp.append('likesOp[]', v)
    })
    spendServing.forEach((v) => {
      if (v) usp.append('servingOp[]', v)
    })
    spendTime.forEach((v) => {
      if (v) usp.append('timeOp[]', v)
    })
    try {
      const res = await axios.get(
        `http://localhost:3004/forum/post_cook?${usp}`
      )

      setCookPostData(res.data.cookPostRows)
      console.log(res.data.cookPostRows)
    } catch (error) {
      console.log(error.message)
    }

    const res2 = await axios.get(
      `http://localhost:3004/forum/forum_likes?mid=29`
    )
    if (res2.data.success) {
      let likeObj = {}
      if (res2.data.rows && res2.data.rows.length) {
        for (let i of res2.data.rows) {
          likeObj[i.categories_sid + '_' + i.post_sid] = 1
        }
        setPLikes(likeObj)
      }
      console.log({ likeObj })
    }
  }
  useEffect(() => {
    getCookPostData()
  }, [likeInstructions, spendServing, spendTime])

  const min = Math.min(postNums, cookPostData.length)

  // member sid
  const [forumMember, setForumMember] = useState(0)
  const checkMemeber = (e) => {
    if (localStorage.getItem('auth')) {
      setForumMember(+localStorage.getItem('auth').mb_sid)
    } else {
      e.preventDefault()
      alert('請先註冊/登入')
    }
  }
  return (
    <>
      <div className="p-navBar">
        <NavBar />
      </div>
      <div className="p-PostWrap">
        <div className="p-sideBarWrap">
          <SideBar />
        </div>
        <div className="p-containerWrap">
          <div className="p-searchBarWrap">
            <SearchBar />
          </div>
          <div className="p-tabCookWrap">
            <TabCook
              likeInstructions={likeInstructions}
              setLikeInstructions={setLikeInstructions}
              spendServing={spendServing}
              setSpendServing={setSpendServing}
              spendTime={spendTime}
              setSpendTime={setSpendTime}
            />
          </div>
          <div className="p-CardWrap">
            {/* Array(min).fill(1). */}
            {cookPostData &&
              cookPostData.map((v, i) => {
                {
                  /* const item = cookPostData[i] */
                }
                const likeKey = v.categories_sid + '_' + v.sid
                const heart = !!pLikes[likeKey]
                console.log({ likeKey, heart })
                return (
                  <>
                    <Card_cook postData={v} key={v.i} heart={heart} />
                  </>
                )
              })}
            <div
              className="p-nonBtn"
              onChange={() => {
                setPostNums(postNums + 3)
              }}
            ></div>
          </div>
        </div>
        <div className="p-recomAdWrit">
          <div className="p-RecommendationWrap">
            <Recommendation />
          </div>
          <div
            className="p-writWrap"
            onClick={(e) => {
              checkMemeber(e)
            }}
          >
            <WriteBtn mbsid={forumMember} />
          </div>
        </div>
      </div>
      <div className="p-footer">
        <Footer />
      </div>
    </>
  )
}

export default PostCook
