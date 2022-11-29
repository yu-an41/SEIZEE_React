import '../styles/06-event-05-ticket.scss'

import jBang from '../img/bang.png'
import jTicket from '../img/ticket.png'

function Ticket() {
  return (
    <>
      <div className="j-event-middle-ticket">
        <div className="j-cate-banner">
          <div className="j-cate-banner-deco">
            <div>我的票卷</div>
          </div>
        </div>
        <div className="j-bang-hide">
          <div className="j-bang">
            <img src={jBang} alt="" />
          </div>

          <img className="j-ticket" src={jTicket} alt="" />
        </div>
      </div>
    </>
  )
}

export default Ticket
