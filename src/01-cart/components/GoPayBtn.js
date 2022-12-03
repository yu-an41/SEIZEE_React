import axios from 'axios'
import dayjs from 'dayjs'
import './../styles/GoPayBtn.scss'

function GoPayBtn({ cartItem }) {
  const GoPay = async () => {
    const order_num = dayjs(new Date()).format('YYYYMMDDHHmmss')
    console.log(order_num)
    const { data } = await axios.post(
      `http://localhost:3004/cart/add-order/${order_num}`,
      cartItem
    )
    // console.log('Go Pay')
  }

  return (
    <div className="y-go-pay-border">
      <p className="y-go-pay" onClick={GoPay}>
        前往結賬
      </p>
    </div>
  )
}

export default GoPayBtn
