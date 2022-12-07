import axios from 'axios'
import { createContext, useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const IsLovedContext = createContext([])

export default IsLovedContext

export const IsLovedContextProvider = function ({ children }) {
  // let initLoved = {
  //   s_sid: 0,
  //   m_sid: 0,
  // }
  const location = useLocation()
  const [lovedList, setLovedList] = useState([])

  const [loved, setLoved] = useState(false)

  const [isLovedNum, setIsLovedNum] = useState([])

  const mb_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).mb_sid
    : '未登入'
  // console.log(mb_sid)

  const getLovedList = async () => {
    if (mb_sid === '未登入') {
      // console.log('未登入，無法取得收藏列表');
      return
    }
    const res = await axios.get(
      `http://localhost:3004/api/shop/lovedList?mb_sid=${mb_sid}`
    )

    const list = res.data.love_rows
    // console.log(list)
    if (list.length > 0) {
      const loved = list.map((v, i) => {
        return { s_sid: v.loveshop_sid, mb_sid: v.lovemb_sid, isLoved: true }
      })
      // console.log(loved)
      setLovedList(loved)

      // console.log(lovedList)
      const lovedNum = loved.map((v, i) => {
        return loved[i].s_sid
      })

      setIsLovedNum(lovedNum)
    }
  }
  // console.log(isLovedNum)

  // 新增收藏
  const addLoved = async (shopSid) => {
    // if (mb_sid === '未登入') {
    //   alert('請先登入會員')
    //   // navigate('/login')
    //   return
    // }

    const res = await axios.get(
      `http://localhost:3004/api/shop/addLoved?s_sid=${shopSid}&mb_sid=${mb_sid}`
    )

    setLoved(true)
  }

  // 移除收藏
  const delLoved = async (shopSid, index) => {
    // if (mb_sid === '未登入') {
    //   alert('請先登入會員')
    //   return
    // }

    const res = await axios.get(
      `http://localhost:3004/api/shop/delLoved?s_sid=${shopSid}&mb_sid=${mb_sid}`
    )

    setLoved(false)
  }

  // 判斷是否重複收藏 決定add 或是 del =>更新 lovelist isloveNum
  const handleClickLove = async (sid) => {
    if (mb_sid === '未登入') {
      alert('請先登入會員')
      return
    }
    const index = isLovedNum.indexOf(sid)
    if (index === -1) {
      addLoved(sid)
      setIsLovedNum([...isLovedNum, sid])
    } else {
      delLoved(sid, index)
      const newLovedNum = isLovedNum.filter((v) => v !== sid)
      setIsLovedNum(newLovedNum)
      // console.log(newLovedNum);
    }
  }

  // didMount 抓資料
  useEffect(() => {
    getLovedList()
  }, [])

  useEffect(() => {
    getLovedList()
  }, [loved, mb_sid, location])

  return (
    <IsLovedContext.Provider
      value={{
        lovedList,
        setLovedList,
        delLoved,
        addLoved,
        loved,
        setLoved,
        isLovedNum,
        setIsLovedNum,
        handleClickLove,
      }}
    >
      {children}
    </IsLovedContext.Provider>
  )
}
