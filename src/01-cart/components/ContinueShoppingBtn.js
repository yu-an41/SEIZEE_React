import './../styles/ContinueShoppingBtn.scss'

function ContinueShoppingBtn({ linkTo }) {
  const ContinueShopping = () => {
    console.log('Continue Shopping')
  }

  return (
    <div className="y-continue-shopping-border">
      <a href={linkTo}>
        <p className="y-continue-shopping">繼續逛逛</p>
      </a>
    </div>
  )
}

export default ContinueShoppingBtn
