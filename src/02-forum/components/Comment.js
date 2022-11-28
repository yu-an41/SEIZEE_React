import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs';

import '../styles/Message.scss'


import Member from './Member'
function Comment({ commData }) {
  const { content, created_at } = commData

  return (
    <>
      <div className="p-message">
        <div className="p-messMembAdCreat">
          <div className="p-messageMember">
            <Member />
          </div>
          <p className="p-messCreatAt">{created_at}</p>
        </div>
        <div className="p-messContent">
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}

export default Comment
