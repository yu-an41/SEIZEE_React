import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../styles/Comment.scss'
import dayjs from 'dayjs'
import log from 'eslint-plugin-react/lib/util/log'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import AuthContext from './../../contexts/AuthContext'
import ModalNotification from '../../components/ModalNotification'
import { imgServerUrl } from '../../my-config'

function Message({ setDoRerender, doRerender, InnerCategoriesSid }) {
  const params = useParams()
  const navigate = useNavigate()
  const { myAuth } = useContext(AuthContext)
  console.log(myAuth)
  const { categories_sid } = InnerCategoriesSid
  // console.log(cookInnerCategories)
  // console.log(params)
  const [isOpen, setIsOpen] = useState(false)
  const [headerMs, setHeaderMs] = useState('')
  const [bodyMs, setBodyMs] = useState('')
  const closeModal = () => {
    setIsOpen(false)
    navigate('/forum/cook')
  }
  const [messContent, setMessContent] = useState({
    sid: 1,
    member_sid: '1',
    categories_sid: categories_sid,
    post_sid: params.sid,
    content: '',
    parent_sid: 0,
    created_at: new Date(),
  })
  //console.log(messContent.categories_sid)
  //console.log(messContent.post_sid)

  //const mbSid = JSON.parse(localStorage.getItem('auth')).mb_sid

  const addMesage = async () => {
    if (!myAuth.authorised) {
      alert('請先登入')
      return
    }
    const fd = new FormData()
    fd.append('member_sid', myAuth.mb_sid)
    fd.append('content', messContent.content)
    fd.append('post_sid', messContent.post_sid)
    fd.append('categories_sid', messContent.categories_sid)
    //fd.append('member_sid', forumMember)

    // console.log(
    //   myAuth.mb_sid,
    //   messContent.content,
    //   messContent.post_sid,
    //   messContent.categories_sid
    //   // forumMember
    // )
    console.log(fd)
    const { data } = await axios.post('http://localhost:3004/forum/message', fd)

    // console.log(data)
    if (data.success) {
      // alert('留言成功')
      //直接顯示留言無用重刷頁面
      setDoRerender(!doRerender)
    }
  }
  // const [forumMember, setForumMember] = useState(0)

  // const checkMemeber = (e) => {
  //   if (localStorage.getItem('auth')) {
  //     setForumMember(+localStorage.getItem('auth').mb_sid)
  //   } else {
  //     e.preventDefault()
  //     alert('請先註冊/登入')
  //   }
  // }

  return (
    <>
      <div className="p-comment">
        <div className="p-commMemberAdInput">
          <div className="p-commMember">
            <img
              src={`${imgServerUrl}/uploads/05-member/${myAuth.mb_photo}`}
              alt=""
            />
          </div>
          <div className="p-commInput">
            <input
              type="text"
              name="sendMessage"
              placeholder="輸入留言"
              value={messContent.content}
              onChange={(e) =>
                setMessContent({ ...messContent, content: e.target.value })
              }
            />
          </div>
          {/* <input
          className="forumMember"
          name="member_sid"
          value={forumMember}
        ></input> */}
        </div>
        <div className="p-commBtn">
          <button onClick={addMesage}>送出</button>
        </div>
      </div>
      <ModalNotification
        isOpen={isOpen}
        NotificationHeader={headerMs}
        NotificationBody={bodyMs}
        closeModal={closeModal}
      />
    </>
  )
}

export default Message
