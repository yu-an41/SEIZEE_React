// import axios from 'axios'
// import { createContext, useState, useEffect, useContext } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import SwitchButtonContext from '../../../contexts/SwitchButtonContext'
// import { ADD_LOVED, GET_LOVED, DEL_LOVED } from '../my-config'

// const IsLovedContext = createContext([])

// export default IsLovedContext

// export const IsLovedContextProvider = function ({ children }) {
//   let initLoved = {
//     p_sid: 1,
//     m_sid: 0,
//   }
//   const navigate = useNavigate()

//   // 切換顯示重抓收藏 (為了解決line顯示)
//   const { productShow } = useContext(SwitchButtonContext)

//   // 收藏列表
//   const [lovedList, setLovedList] = useState([initLoved])
//   // 收藏狀態
//   const [loved, setLoved] = useState(false)
//   // 收藏號碼
//   const [isLovedNum, setIsLovedNum] = useState([])

//   // 從localStorage取得 m_sid

//   const m_sid = JSON.parse(localStorage.getItem('auth'))
//     ? JSON.parse(localStorage.getItem('auth')).sid
//     : '未登入'
//   // console.log(m_sid);

//   // AJAX 抓收藏列表清單
//   const getLovedList = async () => {
//     if (m_sid === '未登入') {
//       // console.log('未登入，無法取得收藏列表');
//       return
//     }
//     const res = await axios.get(`${GET_LOVED}?m_sid=${m_sid}`)

//     const list = res.data.rows
//     const loved = list.map((e, i) => {
//       return { p_sid: e.p_sid, m_sid: e.m_sid, isLoved: true }
//     })
//     setLovedList(loved)
//     let lovedNum = []
//     for (let i = 0; i < lovedList.length; i++) {
//       lovedNum.push(lovedList[i].p_sid)
//     }
//     // console.log(a);
//     setIsLovedNum(lovedNum)

//     // 加入localStorage (非必要)
//     // localStorage.setItem('loved', JSON.stringify(loved));
//     // console.log(list);
//   }

//   // 新增收藏
//   const addLoved = async (productSid) => {
//     // 判斷登入
//     if (m_sid === '未登入') {
//       alert('請先登入會員')
//       navigate('/login')
//       return
//     }

//     const res = await axios.get(
//       `${ADD_LOVED}?p_sid=${productSid}&m_sid=${m_sid}`
//     )

//     const newLoved = [
//       ...lovedList,
//       { p_sid: productSid, m_sid: m_sid, isLoved: true },
//     ]
//     // localStorage.setItem('loved', JSON.stringify(newLoved));
//     setLovedList(newLoved)
//     // 更改收藏狀態
//     setLoved(true)
//   }

//   // 移除收藏
//   const delLoved = async (productSid, index) => {
//     // 判斷登入
//     if (m_sid === '未登入') {
//       alert('請先登入會員')
//       return
//     }

//     const res = await axios.get(
//       `${DEL_LOVED}?p_sid=${productSid}&m_sid=${m_sid}`
//     )
//     const loved1 = lovedList.slice(0, index)
//     const loved2 = lovedList.slice(index + 1)
//     const newLoved = loved1.concat(loved2)
//     // localStorage.setItem('loved', JSON.stringify(newLoved));
//     setLovedList(newLoved)
//     // 更改收藏狀態
//     setLoved(false)
//   }

//   // 以line方式顯示商品列表時，使用
//   const handleClickForLine = async (sid) => {
//     const index = isLovedNum.indexOf(sid)
//     if (index === -1) {
//       addLoved(sid)
//       setIsLovedNum([...isLovedNum, sid])
//     } else {
//       delLoved(sid, index)
//       const loved1 = isLovedNum.slice(0, index)
//       const loved2 = isLovedNum.slice(index + 1)
//       const newLovedNum = loved1.concat(loved2)
//       setIsLovedNum(newLovedNum)
//       // console.log(newLovedNum);
//     }
//   }
//   // console.log(isLovedNum);
//   const location = useLocation()
//   const params = new URLSearchParams(location.search)
//   const sid = +params.get('sid') || 0
//   // let index = lovedList.findIndex((e) => e.p_sid === sid);

//   // localStorage index狀態 , 有->第幾個  無->-1
//   const [indexNum, setIndexNum] = useState(-1)

//   // 判斷localStorage內有無收藏, 切頁面(因應不同商品) or 更改收藏狀態時, 重新set
//   useEffect(() => {
//     let index = lovedList.findIndex((e) => e.p_sid === sid)
//     setIndexNum(index)
//     // console.log(indexNum);
//   }, [location, loved, isLovedNum])

//   // 藉 indexNum 切換 loved 狀態, 使其同步set
//   useEffect(() => {
//     if (indexNum === -1) {
//       setLoved(false)
//     } else {
//       setLoved(true)
//     }
//   }, [indexNum])

//   // didMount 抓資料
//   useEffect(() => {
//     getLovedList()
//   }, [])

//   useEffect(() => {
//     getLovedList()
//   }, [loved, productShow])
//   // console.log(...lovedList);

//   return (
//     <IsLovedContext.Provider
//       value={{
//         lovedList,
//         setLovedList,
//         delLoved,
//         addLoved,
//         loved,
//         setLoved,
//         indexNum,
//         isLovedNum,
//         setIsLovedNum,
//         handleClickForLine,
//       }}
//     >
//       {children}
//     </IsLovedContext.Provider>
//   )
// }
