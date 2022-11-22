import './../styles/ContinueShoppingBtn.scss'

function ContinueShoppingBtn() {
  const ContinueShopping = () => {
    console.log('Continue Shopping')
  }

  return (
    <div className="y-remove-item-border">
      <p className="y-remove-item" onClick={ContinueShopping}>
        清空購物車
      </p>
    </div>
  )
}

export default ContinueShoppingBtn
