import React, { useState } from 'react'
import './style/Carousel.scss'

export default function Carousel() {
  const [myArray, setMyArray] = useState(['0', '1', '2'])

  function handleClick(e) {
    console.log('e', e.target.innerText)

    if (e.target.innerText === '0') {
      setMyArray(['1', '2', '0'])
    }
    if (e.target.innerText === '1') {
      setMyArray(['0', '1', '2'])
    }
    if (e.target.innerText === '2') {
      setMyArray(['2', '0', '1'])
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div
        className="bg-1"
        style={{
          order: myArray[0],
        }}
        onClick={(e) => {
          handleClick(e)
        }}
      >
      <img src='/04-product/img/10003' alt='' />
      </div>
      <div
        className="bg-2"
        style={{
          order: myArray[1],
        }}
        onClick={(e) => handleClick(e)}
      >
      <img src='/04-product/img/10013' alt='' />
      </div>
      <div
        className="bg-3"
        style={{
          order: myArray[2],
        }}
        onClick={(e) => handleClick(e)}
      >
      <img src='/04-product/img/10006' alt='' />
      </div>
    </div>
  )
}

