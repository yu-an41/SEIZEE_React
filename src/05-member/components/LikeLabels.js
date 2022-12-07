import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../style/components/LikeLabels.scss'

function LikeLabels() {
  const location = useLocation()
  let seg1 = location.pathname.split('/')[3]
  // console.log(seg1)

  const actives = {}
  actives[seg1] = {
    backgroundColor: '#ED4743',
    color: '#fff',
    fontWeight: '600',
  }

  return (
    <>
      <div className="s-l-labels">
        <Link
          className="s-l-label s-l-label-product"
          style={actives.product}
          to="/profile/likes/product"
        >
          商品
        </Link>
        <Link
          className="s-l-label s-l-label-shop"
          style={actives.shop}
          to="/profile/likes/shop"
        >
          商家
        </Link>
        <Link
          className="s-l-label s-l-label-shop"
          style={actives.forum}
          to="/profile/likes/forum"
        >
          論壇
        </Link>
        <Link
          className="s-l-label s-l-label-shop"
          style={actives.event}
          to="/profile/likes/event"
        >
          活動
        </Link>
      </div>
    </>
  )
}

export default LikeLabels
