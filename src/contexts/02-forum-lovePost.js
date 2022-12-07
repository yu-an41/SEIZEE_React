import { useState, useEffect, createContext } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'

const ForumCollectContext = createContext([])
export default ForumCollectContext

export const ForumContextProvider = ({ children }) => {
  const initCollect = {
    post_sid: 1,
    mb_sid: 0,
  }
  const location = useLocation()
  //收藏列表
  const [collectList, setCollectList] = useState([initCollect])
  //收藏狀態（用true & false判斷）
  const [collection, setCollection] = useState(false)
  //收藏商品編號
  const [collectionNum, setCollectionNum] = useState([])

  //localStorage得到member_sid
  const mb_sid = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')).mb_sid
    : '尚未登入'
  // console.log(mb_sid);

  //抓收藏清單
  const getCollectList = async () => {
    if (mb_sid === '尚未登入') {
      console.log('未登入！無法加入收藏')
      return
    }
    const response = await axios.get(
      `http://localhost:3004/forum/forum_liked?mb_sid=${mb_sid}`
    )
    const collectData = response.data.collection_rows

    const collect = collectData.map((collection, i) => {
      return {
        post_sid: collection.sid,
        mb_sid: collection.mb_sid,
        collect: true,
      }
    })
    setCollectList(collect) //object

    //把商品sid從object撈出來
    let collectNum = []
    for (let i = 0; i < collect.length; i++) {
      collectNum.push(collect[i].post_sid)
    }
    console.log({ collectNum })
    setCollectionNum(collectNum)
    // console.log(collectNum)
  }

  //加入收藏
  const addCollect = async (post_sid) => {
    console.log('addCollect')
    if (mb_sid === '尚未登入') {
      console.log('未登入！無法加入收藏')
      return
    }
    const response = await axios.get(
      `http://localhost:3004/forum/add?sid=${post_sid}&mb_sid=${mb_sid}`
    )

    //建立新的收藏清單
    setCollectionNum([...collectionNum, post_sid])
  }

  //移除收藏
  const delCollect = async (post_sid, index) => {
    if (mb_sid === '尚未登入') {
      console.log('未登入！無法加入收藏')
      return
    }
    // console.log(post_sid)
    const response = await axios.get(
      `http://localhost:3004/forum/delete?sid=${post_sid}&mb_sid=${mb_sid}`
    )
    const a = collectionNum.filter((e) => e !== post_sid)
    // console.log(a)
    setCollectionNum(a)
    // setCollectList(newcollection);
    //更新收藏狀態
    // setCollection(false);
  }

  //把狀態無限傳給小孩（商品細節頁需要）
  // const handleClick = async (sid) => {
  //   const index = collectionNum.indexOf(sid)
  //     if (index === -1) {
  //       addCollect(sid)
  //       setCollectionNum([...collectionNum, sid])
  //     } else {
  //       delCollect(sid, index)
  //       const a = collectionNum.filter((e)=> e !== sid)
  //       setCollectionNum(a)
  //       console.log(a);
  //     }
  // }
  const handleClick = (isHeart) => {
    setCollection(isHeart)
  }

  useEffect(() => {
    getCollectList()
  }, [collection, mb_sid, location])

  return (
    <ForumCollectContext.Provider
      value={{
        collection,
        setCollection,
        collectList,
        setCollectList,
        collectionNum,
        setCollectionNum,
        addCollect,
        delCollect,
        handleClick,
      }}
    >
      {children}
    </ForumCollectContext.Provider>
  )
}
