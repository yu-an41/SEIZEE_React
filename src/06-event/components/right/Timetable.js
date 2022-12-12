import './Timetable.scss'
import { useContext, useEffect, useState } from 'react'
import carrot from './../../svg/carrot.svg'
import dialogue from './../../svg/dialogue-box.svg'
import menu from './../../svg/menu.svg'
import YeallowWave from '../yellow/YeallowWave'
import { useTimeTable } from '../../context/useTimeTable'
import jDelete from './../../svg/delete.svg'
import axios from 'axios'
import ModalNotification from '../../../components/ModalNotification'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../../contexts/AuthContext'

function Timetable() {
  const {
    timeTable,
    setTimeTable,
    removeTimeTable,
    setWhichHover,
    getEventData,
  } = useTimeTable()
  console.log(timeTable)
  const { myAuth } = useContext(AuthContext)
  let mid
  if (myAuth.authorised) {
    mid = myAuth.mb_sid
    console.log(mid)
  } else {
    mid = 1
    console.log('未登入')
  }
  const navigator = useNavigate()
  const getTicketData = async () => {
    const postData = {
      memberSid: mid,
      timeTable,
    }

    const { data } = await axios.post(
      `http://localhost:3004/event/event-ticket`,
      postData
    )
    console.log({ data })
  }
  const [isClicked, setIsClicked] = useState(false)
  const handleClickSend = () => {
    //toggle
    setIsClicked((current) => !current)
  }

  useEffect(() => {
    getEventData()
  }, [timeTable])
  // useEffect(() => {
  //   const timeTable = localStorage.getItem('timetable') || []
  //   console.log('timeTable', timeTable)
  //   // setTimeTable(timeTable)
  // }, [])
  const [isOpen, setIsOpen] = useState(false)
  const [jHeader, setJHeader] = useState('')
  const [jBody, setJBody] = useState('')
  const closeModal = () => {
    setIsOpen(false)
    navigator('/event/ticket')
  }

  return (
    <>
      <div className="j-right-wrap">
        <div className="j-Rwave">
          <YeallowWave />
        </div>
        <div class="j-right">
          <div className="j-hidebox">
            <div className="j-menu">
              <img className="j-hidehide" src={menu} alt="" />
            </div>
            <div className="j-banner">我的時間表</div>
          </div>
          <div className="j-table-right">
            <div className="j-dialogue">
              <div className="j-sayhi1">
                歡迎光臨～現在就來製作專屬時間表！試試最新的路痴友善地圖吧！
              </div>
              <div className="j-sayhi2">
                歡迎光臨～現在就來製作專屬時間表！試試最新的路痴友善地圖吧！
              </div>
              <img src={dialogue} alt="" />
            </div>
            <div className="j-side-carrot">
              <img src={carrot} alt="" />
            </div>
            <div className="j-cardG">
              {timeTable.map((v, i) => {
                return (
                  <div
                    key={`${i + v.time}`}
                    className={`j-tableself ${
                      v.name === '' ? '' : 'j-selfshake'
                    }`}
                    style={{ background: `${v.color}` }}
                  >
                    <div className="j-card">
                      <div
                        className="j-cardTop"
                        style={{ background: `${v.color}` }}
                      >
                        <div className="j-cardtime">{v.time}</div>
                        <img
                          style={
                            v.name === ''
                              ? { display: 'none' }
                              : { display: 'block' }
                          }
                          src={jDelete}
                          alt=""
                          onClick={() => {
                            removeTimeTable(i)
                          }}
                        />
                      </div>
                      <div
                        className="j-cardname"
                        // style={{ background: `${v.color}` }}
                        onClick={() => {
                          setWhichHover(v.cate)
                        }}
                      >
                        {v.name}
                      </div>
                      <div className="j-cardbottom"></div>
                    </div>
                  </div>
                )
              })}
              <div
                className={`j-saveBtn ${
                  isClicked === true ? 'j-clickedBtn' : ''
                }`}
                onClick={() => {
                  handleClickSend()
                  getTicketData()
                  setIsOpen(true)
                  setJHeader('！兌換成功！')
                  setJBody('現在就去看看你的專屬票卷吧～')
                }}
              >
                {`${isClicked === true ? '兌換完成' : '兌換票卷'}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalNotification
        isOpen={isOpen}
        NotificationHeader={jHeader}
        NotificationBody={jBody}
        closeModal={closeModal}
      />
    </>
  )
}

export default Timetable
