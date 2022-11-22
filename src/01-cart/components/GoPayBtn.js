import './../styles/GoPayBtn.scss'

function GoPayBtn() {
  const GoPay = () => {
    console.log('Go Pay')
  }

  return (
    <div className="y-go-pay-border">
      <p className="y-go-pay" onClick={GoPay}>
        清空購物車
      </p>
    </div>
  )
}

export default GoPayBtn
