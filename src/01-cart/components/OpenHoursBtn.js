import { useState } from 'react'
import './../styles/OpenHoursBtn.scss'

function OpenHoursBtn() {
  const [OpenHours, setOpenHours] = useState('營業中')

  const OpenHoursHandler = (e) => {
    console.log(e.currentTarget.value)
    setOpenHours('休息中')
  }
  return (
    <>
      <div className="y-store-status-border">
        <p
          className="y-store-status"
          onClick={(e) => {
            OpenHoursHandler(e)
          }}
        >
          {OpenHours}
        </p>
      </div>
    </>
  )
}

export default OpenHoursBtn
