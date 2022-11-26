import '../styles/06-event-01-top.scss'

import carrot from '../svg/carrot.svg'
import tCircle from '../svg/tiltCircle.svg'
import jSeizee from '../svg/SEIZEE.svg'
import jFesti from '../svg/feastival.svg'
import jStar from '../svg/star.svg'
import jOGstar from '../svg/orangeStar.svg'

function Top() {
  return (
    <>
      <div className="j-buleBack">
        <div className="j-middle-group-top">
          <div className="j-carrot">
            <img src={carrot} alt="" />
          </div>
          <div className="j-circle"></div>
          <div className="j-tilt-circle">
            <img src={tCircle} alt="" />
          </div>
          <div className="j-rectangle"></div>
          <div className="j-front-word-1">
            <img src={jSeizee} alt="" />
          </div>
          <div className="j-front-word-2">
            <img src={jFesti} alt="" />
          </div>
          <div className="j-star1">
            <img src={jStar} alt="" />
          </div>
          <div className="j-star2">
            <img src={jOGstar} alt="" />
          </div>
          <div className="j-star3">
            <img src={jOGstar} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Top
