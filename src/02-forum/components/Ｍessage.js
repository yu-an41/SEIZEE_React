import axios from 'axios'
import React, { useState } from 'react'
import '../styles/Comment.scss'
import dayjs from 'dayjs'
import log from 'eslint-plugin-react/lib/util/log'

function Message() {
  const [messContent, setMessContent] = useState({
    sid: 1,
    member_sid: 1,
    categories_sid: 1,
    post_sid: 1,
    content: '',
    parent_sid: 0,
    created_at: '',
  })

  const addMesage = async () => {
    // const newMessage = { ...messContent }
    const fd = new FormData()
    fd.append('content', messContent.content)
    console.log(fd)
    const { data } = await axios.post('http://localhost:3002/forum/message', fd)
    console.log(data)
    if (data.success) {
      alert('留言成功')
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
