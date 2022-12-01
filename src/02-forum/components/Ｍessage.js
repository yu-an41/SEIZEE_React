import axios from 'axios'
import React, { useState } from 'react'
import '../styles/Comment.scss'
import dayjs from 'dayjs'
import log from 'eslint-plugin-react/lib/util/log'
import { useLocation, useParams } from 'react-router-dom'

function Message({ setDoRerender, doRerender }) {
  const params = useParams()
  // console.log(params)
  const [messContent, setMessContent] = useState({
    sid: 1,
    member_sid: 1,
    categories_sid: 1,
    post_sid: params.sid,
    content: '',
    parent_sid: 0,
    created_at: new Date(),
  })

  const addMesage = async () => {
    const fd = new FormData()
    fd.append('content', messContent.content)
    console.log(fd)
    const { data } = await axios.post('http://localhost:3002/forum/message', fd)
    console.log(data)
    if (data.success) {
      alert('留言成功')
      //直接顯示留言無用重刷頁面
      setDoRerender(!doRerender)
    }
  }

  return (
    <div className="p-comment">
      <div className="p-commMemberAdInput">
        <div className="p-commMember">
          <img
            src="https://dotown.maeda-design-room.net/wp-content/uploads/2022/01/thing_crab_01.png"
            alt=""
          />
        </div>
        <div className="p-commInput">
          <input
            type="text" 
            name="sendMessage"
            placeholder="輸入留言"
            value={messContent.content}
            onChange={(e) => setMessContent({ content: e.target.value })}
          />
        </div>
      </div>
      <div className="p-commBtn">
        <button onClick={addMesage}>送出</button>
      </div>
    </div>
  )
}

export default Message
