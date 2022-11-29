import { doc } from 'prettier'
import { useState } from 'react'
import './../styles/PickupHoursBtn.scss'

function PickupHoursBtn() {
  const [PickupHours, setPickupHours] = useState('可以取餐')

  const PickupHoursHandler = (e) => {
    console.log(e.currentTarget.value)
    setPickupHours('尚未開放取餐')
  }
  return (
    <>
      <div className="y-pickup-status-border">
        <p
          className="y-pickup-status"
          onClick={(e) => {
            PickupHoursHandler(e)
          }}
        >
          {PickupHours}
        </p>
      </div>
    </>
  )
}

export default PickupHoursBtn
