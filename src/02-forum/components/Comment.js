import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import '../styles/Message.scss'

import Member from './Member'
function Comment({ commData }) {
  const { content, created_at, member_sid, mb_photo, mb_name, mb_email } =
    commData

  return (
    <>
      <div className="p-message">
        <div className="p-messMembAdCreat">
          <div className="p-messageMember">
            <Member cookMb={commData}/>
          </div>
          <p className="p-messCreatAt">
            {dayjs(created_at).format('YYYY.MM.DD')}
          </p>
        </div>
        <div className="p-messContent">
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}

export default Comment
