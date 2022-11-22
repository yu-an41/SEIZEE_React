import './../styles/ContinueShoppingBtn.scss'

function ContinueShoppingBtn() {
  const ContinueShopping = () => {
    console.log('Continue Shopping')
  }

  return (
    <div className="y-continue-shopping-border">
      <p className="y-continue-shopping" onClick={ContinueShopping}>
        繼續逛逛
      </p>
    </div>
  )
}

export default ContinueShoppingBtn
