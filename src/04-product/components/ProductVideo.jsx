import React, { useEffect, useRef } from 'react'
import './style/ProductVideo.scss'

export default function AboutUs() {
  const videoEl = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  return (
    <div className="a-video">
      <div className="a-productVideoWrapper">
        {/* <h3 className="a-producVideo">小影片</h3> */}
        <video
          playsInline
          loop
          muted
          alt="All the devices"
          src="/04-product/video/waku.mp4"
          type="video/mp4"
          ref={videoEl}
        />
      </div>
    </div>
  )
}
