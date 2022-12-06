import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

import './../styles/Tag.scss'

function Tag({ tagSid }) {
  console.log(tagSid[0]?.tagContent)

  return (
    <>
      <div className="p-tag-wrap">
        <div className="p-tag">
          <p>{tagSid?.tagContent}</p>
        </div>
      </div>
    </>
  )
}

export default Tag
