import './../styles/EmptyCartBtn.scss'
import TrashCanIcon from './../../dotown/pizza.png'

function EmptyCartBtn() {
  const EmptyCart = () => {
    console.log('cart emptied')
  }

  return (
    <div className="y-empty-cart-border">
      <div className="y-empty-cart-icon">
        <img src={TrashCanIcon} alt="trash can icon" />
      </div>
      <p className="y-empty-cart" onClick={EmptyCart}>
        清空購物車
      </p>
    </div>
  )
}

export default EmptyCartBtn
