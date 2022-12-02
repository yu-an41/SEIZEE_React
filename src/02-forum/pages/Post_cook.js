import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/PostCook.scss'

import SideBar from '../components/Side_bar'
import CardPost from '../components/Card_post'
import SearchBar from '../components/Search_bar'
import Recommendation from '../components/Recommendation'
import WriteBtn from '../components/WriteBtn'
import TabCook from '../components/TabCook'
import { Link } from 'react-router-dom'

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
    },
  ])
  const getCookPostData = async () => {
    const usp = new URLSearchParams()
    // likeInstructions.forEach((v) => {
    //   if (v) usp.append('likesOp[]', v)
    // })
    // spendserving.forEach((v)=>{
    //   if (v) usp.append('servingOp[]', v)
    // })
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
  }
  useEffect(() => {
    getCookPostData()
  }, [likeInstructions, spendServing, spendTime])

  const min = Math.min(postNums, cookPostData.length)
  return (
    <>
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
                const item = cookPostData[i]
                return (
                  <>
                    <CardPost postData={item} key={item.i} />
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
          <div className="p-writWrap">
            <WriteBtn />
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCook
